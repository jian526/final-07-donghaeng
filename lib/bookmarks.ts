import { Bookmarks, BookmarksResponse, BookmarkResponse } from '@/types/bookmarks';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';
/**
 * 사용자 북마크 목록 조회
 * @param {string} _id - 회원 ID
 * @param {string} accessToken - 인증 토큰
 * @returns {Promise<BookmarksRes | ErrorRes>} - 북마크 목록 응답 객체
 */
export async function getBookmarksByType(type: string): Promise<BookmarksResponse> {
  try {
    const res = await fetch(`${API_URL}/bookmarks/${type}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('북마크 목록을 가져오는데 실패했습니다.');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('북마크 목록 조회 에러:', error);
    return { ok: 0, item: [] };
  }
}
// 북마크 추가
export const addBookmarkToServer = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': process.env.NEXT_PUBLIC_CLIENT_ID || '',
      },
      body: JSON.stringify({
        product_id: Number(productId),
        memo: '북마크',
      }),
    });

    // 409 Conflict는 이미 북마크가 존재한다는 의미이므로 성공으로 처리
    if (response.status === 409) {
      console.log('이미 북마크에 추가된 항목입니다.');
      return true;
    }

    if (!response.ok) {
      throw new Error('북마크 추가에 실패했습니다.');
    }

    return true;
  } catch (error) {
    console.error('북마크 추가 에러:', error);
    throw error;
  }
};

//북마크 삭제
export async function deleteBookmarkFromServer(_id: number, accessToken: string): Promise<{ ok: number }> {
  try {
    const res = await fetch(`${API_URL}/bookmarks/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) {
      throw new Error('북마크 삭제에 실패했습니다.');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('북마크 삭제 에러', error);
    return { ok: 0 };
  }
}

//전체 북마크 목록 조회
export async function getAllBookmarks(accessToken: string): Promise<BookmarksResponse> {
  try {
    const res = await fetch(`${API_URL}/bookmarks/product`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('북마크 목록을 가져오는데 실패했습니다.');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('전체 북마크 조회 에러: ', error);
    return { ok: 0, item: [] };
  }
}
