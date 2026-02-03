'use client';

import { useState, useEffect } from 'react';
import style from './History.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

//Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import DefaultLayout from '@/app/components/DefaultLayout';
import useUserStore from '@/zustand/userStore';
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

  return (
    <>
      <DefaultLayout>
        <main className={style.container}>
          {
            <div className={style.contentWrapper}>
              <h1 className={style.title}>모임 조회</h1>
              <div className={style.btnGroup}>
                <button className={`${style.beforeBtn} `}>참여 전</button>
                <button className={`${style.afterBtn} `}>참여 후</button>
              </div>
              <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={'auto'}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                className={style.swiper}
                breakpoints={{
                  0: {
                    enabled: false, // 모바일
                    centeredSlides: false,
                  },
                  1024: {
                    enabled: true, // 웹
                    centeredSlides: true,
                  },
                }}
              >
                {meetings.map((apply) =>
                  apply.products.map((meeting) => (
                    <SwiperSlide key={meeting._id}>
                      <MeetingCard meeting={meeting} />
                    </SwiperSlide>
                  ))
                )}
              </Swiper>
            </div>
          }
        </main>
      </DefaultLayout>
    </>
  );
}
