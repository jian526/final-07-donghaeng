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
  return (
    <>
      <Swiper className={style.swiper} modules={[Pagination]} spaceBetween={20} slidesPerView="auto" centeredSlides={true} pagination={{ clickable: true }} onSwiper={setSwiperInstance}>
        {bookmarkedMeetings.map((bookmark) => (
          <SwiperSlide className={style.swiperSlide} key={bookmark._id}>
            <MeetingCard meetingId={bookmark.target_id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
