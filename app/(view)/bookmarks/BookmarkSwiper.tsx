'use client';

import { MeetingCard } from '@/app/components/MeetingCard';
import style from './Bookmarks.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Bookmarks } from '@/types/bookmarks';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

//Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

interface BookmarkSwiperProps {
  bookmarkedMeetings: Bookmarks[];
}

export default function BookmarkSwiper({ bookmarkedMeetings }: BookmarkSwiperProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  // 스케일 적용 함수
  const applyScaleEffect = (swiper: SwiperType) => {
    if (!swiper.slides) return;
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

  return (
    <>
      <Swiper
        className={style.swiper}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => {
          applyScaleEffect(swiper);
        }}
        onInit={(swiper) => {
          applyScaleEffect(swiper);
        }}
      >
        {bookmarkedMeetings.map((bookmark) => (
          <SwiperSlide className={style.swiperSlide} key={bookmark._id}>
            <MeetingCard meetingId={bookmark.target_id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
