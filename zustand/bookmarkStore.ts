// stores/bookmarkStore.ts
import { Bookmarks } from '@/types/bookmarks';
import { create, StateCreator } from 'zustand';

// 북마크 정보를 관리하는 스토어의 상태 인터페이스
export interface BookmarkStoreState {
  bookmarks: Bookmarks[]; // 전체 북마크 목록
  selectedBookmark: Bookmarks | null; // 선택된 북마크 상세
  loading: boolean;

  // 북마크 목록 설정
  setBookmarks: (bookmarks: Bookmarks[]) => void;

  // 단일 북마크 선택
  setSelectedBookmark: (bookmark: Bookmarks | null) => void;

  // 북마크 추가
  addBookmark: (bookmark: Bookmarks) => void;

  // 북마크 업데이트 (메모 수정 등)
  updateBookmark: (bookmarkId: number, updates: Partial<Bookmarks>) => void;

  // 북마크 삭제
  removeBookmark: (bookmarkId: number) => void;

  // 타입별 북마크 필터링
  getBookmarksByType: (type: string) => Bookmarks[];

  // 특정 대상의 북마크 여부 확인
  isBookmarked: (targetId: number, type: string) => boolean;

  // 로딩 상태 설정
  setLoading: (loading: boolean) => void;

  // 스토어 초기화
  resetBookmark: () => void;

  // 북마크 데이터 가져오기
  fetchBookmarks: (accessToken: string) => Promise<void>;
}

// 북마크 정보를 관리하는 스토어 생성
const BookmarkStore: StateCreator<BookmarkStoreState> = (set, get) => ({
  bookmarks: [],
  selectedBookmark: null,
  loading: false,

  setBookmarks: (bookmarks) => set({ bookmarks }),

  setSelectedBookmark: (bookmark) => set({ selectedBookmark: bookmark }),

  addBookmark: (bookmark) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, bookmark],
    })),

  updateBookmark: (bookmarkId, updates) =>
    set((state) => ({
      bookmarks: state.bookmarks.map((bookmark) => (bookmark._id === bookmarkId ? { ...bookmark, ...updates } : bookmark)),
    })),

  removeBookmark: (bookmarkId) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((bookmark) => bookmark._id !== bookmarkId),
      selectedBookmark: state.selectedBookmark?._id === bookmarkId ? null : state.selectedBookmark,
    })),

  getBookmarksByType: (type) => {
    return get().bookmarks.filter((bookmark) => bookmark.type === type);
  },

  isBookmarked: (targetId, type) => {
    return get().bookmarks.some((bookmark) => bookmark._id === targetId);
  },

  setLoading: (loading) => set({ loading }),

  resetBookmark: () =>
    set({
      selectedBookmark: null,
      bookmarks: [],
    }),

  fetchBookmarks: async (accessToken: string) => {
    set({ loading: true });
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks/product`, {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          'Client-Id': process.env.NEXT_PUBLIC_CLIENT_ID || '',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res.ok) {
        throw new Error('북마크 데이터를 가져오는데 실패했습니다.');
      }
      const data = await res.json();
      if (data.ok === 1) {
        set({ bookmarks: data.item });
      }
    } catch (error) {
      console.error('북마크 fetch 에러:', error);
    } finally {
      set({ loading: false });
    }
  },
});

const useBookmarkStore = create<BookmarkStoreState>()(BookmarkStore);

// 북마크 데이터를 가져오는 서버 함수
export async function getBookmarks() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks`, {
      cache: 'no-store', // 항상 최신 데이터 가져오기
      headers: {
        'Content-Type': 'application/json',
        // 필요시 인증 헤더 추가
        // 'Authorization': `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error('북마크 데이터를 가져오는데 실패했습니다.');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('북마크 fetch 에러:', error);
    return { ok: 0, item: [] };
  }
}

export default useBookmarkStore;
