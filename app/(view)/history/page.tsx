'use client';

import { useState, useEffect } from 'react';
import style from './History.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

//Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import DefaultLayout from '@/app/components/DefaultLayout';
import { Meetings } from '@/types/meetings';
import useUserStore from '@/zustand/userStore';
import { useRouter } from 'next/navigation';
import { getMyMeetings } from '@/lib/meetings';
import { Apply } from '@/types/apply';
import MeetingCard from '@/app/(view)/history/MeetingCard';

export default function HistoryPage() {
  const { user } = useUserStore();
  // const router = useRouter();
  const [meetings, setMeetings] = useState<Apply[]>([]);

  useEffect(() => {
    if (!user || !user.token || !user.token.accessToken) return;

    const fetchMeetings = async () => {
      const res = await getMyMeetings(user!.token!.accessToken);
      if (!res || res.ok === 0) return;

      console.log('데이터를 잘 불러와주나요', res, '');
      setMeetings(res.item);
    };

    fetchMeetings();
  }, [user]);

  const [isDesktop, setIsDesktop] = useState(false); //모바일, 데스크탑 나누는...? 훅?
  const [filter, setFilter] = useState<'before' | 'after'>('before');
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // 스케일 적용 함수 스와이프를 위해 있는거겠지...?
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

  return (
    <>
      <DefaultLayout>
        <main className={style.container}>
          {isDesktop ? (
            <div className={style.contentWrapper}>
              <h1 className={style.title}>모임 조회</h1>
              <Swiper modules={[Pagination]} spaceBetween={10} slidesPerView={'auto'} centeredSlides={true} pagination={{ clickable: true }} className={style.swiper}>
                {meetings.map((apply) =>
                  apply.products.map((meeting) => (
                    <SwiperSlide key={meeting._id}>
                      <MeetingCard meeting={meeting} />
                    </SwiperSlide>
                  ))
                )}
              </Swiper>
            </div>
          ) : (
            <div className={style.mobileContentWrapper}>
              <h1 className={style.title}></h1>
              <div className={style.mobileCardList}>{meetings.map((apply) => apply.products.map((meeting) => <MeetingCard key={meeting._id} meeting={meeting} />))}</div>
            </div>
          )}
        </main>
      </DefaultLayout>
    </>
  );
}
