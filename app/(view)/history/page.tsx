'use client';

import { useState, useEffect } from 'react';
import style from './History.module.css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

//Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DefaultLayout from '@/app/components/DefaultLayout';
import Image from 'next/image';

const meetings = [
  {
    id: 1,
    title: '세상에서 제일 비싼 두쫀쿠 만들기',
    category: {
      location: '마포구',
      theme: '보드게임',
      age: '20~30대',
      gender: '남녀무관',
      people: '인원 4~5명',
    },
    date: '26.1.27(화) 오후 3:00',
    joined: false,
  },
  {
    id: 2,
    title: '한강에서 자전거 타기',
    category: {
      location: '강남구',
      theme: '운동',
      age: '20~30대',
      gender: '남녀무관',
      people: '인원 3~4명',
    },
    date: '26.1.28(수) 오후 2:00',
    joined: true,
  },
  {
    id: 3,
    title: '북촌 한옥마을 산책',
    category: {
      location: '종로구',
      theme: '문화탐방',
      age: '전연령',
      gender: '여성만',
      people: '인원 2~3명',
    },
    date: '26.1.29(목) 오후 4:00',
    joined: true,
  },
  {
    id: 4,
    title: '세상에서 제일 비싼 두쫀쿠 만들기',
    category: {
      location: '마포구',
      theme: '보드게임',
      age: '20~30대',
      gender: '남녀무관',
      people: '인원 4~5명',
    },
    date: '26.1.27(화) 오후 3:00',
    joined: false,
  },
  {
    id: 5,
    title: '북촌 한옥마을 산책',
    category: {
      location: '종로구',
      theme: '문화탐방',
      age: '전연령',
      gender: '여성만',
      people: '인원 2~3명',
    },
    date: '26.1.29(목) 오후 4:00',
    joined: true,
  },
];

//카드 컴포넌트 분리
function MeetingCard({ meeting }: { meeting: (typeof meetings)[0] }) {
  return (
    <article className={style.card}>
      <div className={style.cardContent}>
        <figure className={style.imageWrapper}>
          <div className={style.characterImage} role="img" aria-label="모임 대표 이미지"></div>
          <figcaption className={'sr-only'}>모임 대표 이미지</figcaption>
        </figure>
        <div className={style.infoWrapper}>
          <h2 className={style.cardTitle}>{meeting.title}</h2>
          <ul className={style.infoList}>
            <li className={style.infoItem}>
              <span className={style.bullet} aria-hidden="true">
                <Image src="/icon/tag.svg" width={18} height={18} alt="장소 아이콘" />
              </span>
              <p>
                {meeting.category.location}. {meeting.category.theme}
              </p>
            </li>
            <li className={style.infoItem}>
              <span className={style.bullet} aria-hidden="true">
                <Image src="/icon/info.svg" width={18} height={18} alt="정보 아이콘" />
              </span>
              <p>
                {meeting.category.age}, {meeting.category.gender}
              </p>
            </li>
            <li className={style.infoItem}>
              <span className={style.bullet} aria-hidden="true">
                <Image src="/icon/people.svg" width={18} height={18} alt="사람들 아이콘" />
              </span>
              <p>{meeting.category.people}</p>
            </li>
            <li className={style.infoItem}>
              <span className={style.bullet} aria-hidden="true">
                <Image src="/icon/calendar.svg" width={18} height={18} alt="날짜 아이콘" />
              </span>
              <p>{meeting.date}</p>
            </li>
          </ul>
        </div>
      </div>
      <Link href={`/meetings/${meeting.id}`} className={style.arrowIcon}>
        <Image src="/icon/arrow.svg" width={20} height={20} alt="상세보기" />
      </Link>
    </article>
  );
}

export default function HistoryPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [filter, setFilter] = useState<'before' | 'after'>('before');
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const filteredMeetings = meetings.filter((meeting) => (filter === 'before' ? !meeting.joined : meeting.joined));

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
      // 약간의 딜레이 후 스케일 효과 재적용
      setTimeout(() => {
        swiperInstance.slideTo(0, 0); // 첫 번째 슬라이드로 이동 (애니메이션 없이)
        applyScaleEffect(swiperInstance);
      }, 50);
    }
  }, [filter, swiperInstance, filteredMeetings.length]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <DefaultLayout>
        <main className={style.container}>
          {isDesktop ? (
            <div className={style.contentWrapper}>
              <h1 className={style.title}>모임 조회</h1>
              <div className={style.btnGroup}>
                <button className={`${style.beforeBtn} ${filter === 'before' ? style.active : ''}`} onClick={() => setFilter('before')}>
                  참여 전
                </button>
                <button className={`${style.afterBtn} ${filter === 'after' ? style.active : ''}`} onClick={() => setFilter('after')}>
                  참여 후
                </button>
              </div>

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
                {filteredMeetings.map((meeting) => (
                  <SwiperSlide className={style.swiperSlide} key={meeting.id}>
                    <MeetingCard meeting={meeting} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className={style.mobileContentWrapper}>
              <h1 className={style.title}>모임 조회</h1>
              <div className={style.btnGroup}>
                <button className={`${style.beforeBtn} ${filter === 'before' ? style.active : ''}`} onClick={() => setFilter('before')}>
                  참여 전
                </button>
                <button className={`${style.afterBtn} ${filter === 'after' ? style.active : ''}`} onClick={() => setFilter('after')}>
                  참여 후
                </button>
              </div>

              <div className={style.mobileCardList}>
                {filteredMeetings.map((meeting) => (
                  <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
              </div>
            </div>
          )}
        </main>
      </DefaultLayout>
    </>
  );
}
