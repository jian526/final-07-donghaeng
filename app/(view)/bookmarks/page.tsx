'use client';
import { useState, useEffect } from 'react';
import style from './Bookmarks.module.css';

import DefaultLayout from '@/app/components/DefaultLayout';
import { MeetingCard } from '@/app/components/MeetingCard';
import BookmarkSwiper from '@/app/(view)/bookmarks/BookmarkSwiper';
import useBookmarkStore from '@/zustand/bookmarkStore';
import useUserStore from '@/zustand/userStore';
import { getAllBookmarks } from '@/lib/bookmarks';

export default function BookmarkPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [loading, setLoading] = useState(true);
  const { bookmarks, setBookmarks } = useBookmarkStore();
  const { user } = useUserStore();
  const accessToken = user?.token?.accessToken || '';

  // 페이지 로드 시 북마크 데이터 가져오기 (store에 데이터가 없을 때만)
  useEffect(() => {
    const fetchBookmarks = async () => {
      // store에 이미 데이터가 있으면 API 호출 안 함
      if (bookmarks.length > 0) {
        setLoading(false);
        return;
      }

      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await getAllBookmarks(accessToken);
        if (res.ok === 1 && res.item) {
          setBookmarks(res.item);
        }
      } catch (error) {
        console.error('북마크 조회 에러:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookmarks();
  }, [bookmarks.length, setBookmarks, accessToken]);

  // 북마크된 모임 필터링 (type이 'product'인 경우)
  const bookmarkedMeetings = bookmarks.filter((bookmark) => bookmark.type === 'product');

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 로딩 중인 경우
  if (loading) {
    return (
      <DefaultLayout>
        <main className={style.container}>
          <div className={style.contentWrapper}>
            <h1 className={style.title}>북마크</h1>
            <p className={style.emptyMessage}>로딩중...</p>
          </div>
        </main>
      </DefaultLayout>
    );
  }

  // 북마크가 없는 경우
  if (bookmarkedMeetings.length === 0) {
    return (
      <DefaultLayout>
        <main className={style.container}>
          <div className={style.contentWrapper}>
            <h1 className={style.title}>북마크</h1>
            <p className={style.emptyMessage}>북마크한 모임이 없습니다.</p>
          </div>
        </main>
      </DefaultLayout>
    );
  }

  return (
    <>
      <DefaultLayout>
        <main className={style.container}>
          {isDesktop ? (
            <div className={style.contentWrapper}>
              <h1 className={style.title}>북마크</h1>
              <BookmarkSwiper bookmarkedMeetings={bookmarkedMeetings} />
            </div>
          ) : (
            <div className={style.mobileContentWrapper}>
              <h1 className={style.title}>북마크</h1>
              <div className={style.mobileCardList}>
                {bookmarkedMeetings.map((bookmark) => (
                  <MeetingCard key={bookmark._id} meetingId={bookmark.target_id} />
                ))}
              </div>
            </div>
          )}
        </main>
      </DefaultLayout>
    </>
  );
}
