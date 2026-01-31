'use client';

import { useEffect } from 'react';
import style from './Bookmarks.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

//Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DefaultLayout from '@/app/components/DefaultLayout';

import { useBookmarkStore } from '@/zustand/bookmarkStore';
import { Meetings } from '@/types/meetings';

export default function BookmarkPage() {
  // 스케일 적용 함수
  const applyScaleEffect = (swiper: SwiperType) => {
    swiper.slides.forEach((slide, index) => {
      slide.style.transition = 'all 0.3s ease';
      if (index === swiper.activeIndex) {
        slide.style.transform = 'scale(1)';
        slide.style.opacity = '1';
      } else {
        slide.style.transform = 'scale(0.8)';
        slide.style.opacity = '0.7';
      }
    });
  };

  // 필터 변경 시 Swiper 업데이트
  useEffect(() => {
    if (swiperInstance) {
      setTimeout(() => {
        swiperInstance.slideTo(0, 0);
        applyScaleEffect(swiperInstance);
      }, 50);
    }
  }, [swiperInstance]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 로딩 상태
  if (loading) {
    return (
      <DefaultLayout>
        <main className={style.container}>
          <div className={style.contentWrapper}>
            <h1 className={style.title}>북마크</h1>
            <p>로딩 중...</p>
          </div>
        </main>
      </DefaultLayout>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <DefaultLayout>
        <main className={style.container}>
          <div className={style.contentWrapper}>
            <h1 className={style.title}>북마크</h1>
            <p>오류: {error}</p>
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
              <BookmarkSwiper bookmarks={bookmarkedMeetings} />
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
