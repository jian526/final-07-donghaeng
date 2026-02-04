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
import { useRouter } from 'next/navigation';

export default function HistoryPage() {
  const { user } = useUserStore();
  const router = useRouter();
  const [meetings, setMeetings] = useState<Apply[]>([]);
  const accessToken = user?.token?.accessToken;
  const [isEmpty, setIsEmpty] = useState(false);
  const hasHydrated = useUserStore((state) => state.hasHydrated);
  const [filter, setFilter] = useState<'all' | 'before' | 'after'>('all');

  const isPastMeeting = (meetingDate: string) => {
    if (!meetingDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const meeting = new Date(meetingDate);
    meeting.setHours(0, 0, 0, 0);
    return meeting < today;
  };

  const getFilteredMeetings = () => {
    if (filter === 'all') return meetings;

    return meetings
      .map((apply) => ({
        ...apply,
        products: apply.products.filter((meeting) => {
          const isPast = isPastMeeting(meeting.extra?.date || '');
          return filter === 'after' ? isPast : !isPast;
        }),
      }))
      .filter((apply) => apply.products.length > 0);
  };

  useEffect(() => {
    if (!hasHydrated) return;

    if (!accessToken) {
      router.replace('/login');
    }

    const fetchMeetings = async () => {
      const res = await getMyMeetings(accessToken || ' ');
      if (!res || res.ok === 0) return;

      if (res.item.length === 0) {
        setMeetings([]);
        setIsEmpty(true);
      } else {
        setMeetings(res.item);
        setIsEmpty(false);
      }

      console.log('데이터를 잘 불러와주나요', res, '');
      setMeetings(res.item);
    };

    fetchMeetings();
  }, [hasHydrated, accessToken, router]);

  if (!hasHydrated) return null;

  if (!accessToken) {
    return null;
  }

  const filteredMeetings = getFilteredMeetings();

  return (
    <>
      <DefaultLayout>
        <main className={style.container}>
          {
            <div className={style.contentWrapper}>
              <h1 className={style.title}>모임 조회</h1>
              <div className={style.btnGroup}>
                <button className={`${style.beforeBtn}  ${filter === 'before' ? style.active : ''} `} onClick={() => setFilter('before')}>
                  참여 전
                </button>
                <button className={`${style.afterBtn} ${filter === 'after' ? style.active : ''} `} onClick={() => setFilter('after')}>
                  참여 후
                </button>
              </div>
              {isEmpty ? (
                <div className={style.empty}> 신청한 모임이 없습니다.</div>
              ) : (
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
                  {filteredMeetings.map((apply) =>
                    apply.products.map((meeting) => (
                      <SwiperSlide key={meeting._id}>
                        <MeetingCard meeting={meeting} isPast={isPastMeeting(meeting.extra?.date || '')} />
                      </SwiperSlide>
                    ))
                  )}
                </Swiper>
              )}
            </div>
          }
        </main>
      </DefaultLayout>
    </>
  );
}
