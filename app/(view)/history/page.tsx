'use client';

import { useState, useEffect } from 'react';
import style from './History.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

//Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    joined: false,
  },
];

//카드 컴포넌트 분리
function MeetingCard({ meeting }: { meeting: (typeof meetings)[0] }) {
  return (
    <article className={style.card}>
      <div className={style.cardContent}>
        <figure className={style.imageWrapper}>
          <div className={style.characterImage} role="img" aria-label="모임 대표 이미지"></div>
          <figcaption className={style.srOnly}>모임 대표 이미지</figcaption>
        </figure>
        <div className={style.infoWrapper}>
          <h2 className={style.cardTitle}>{meeting.title}</h2>
          <ul className={style.infoList}>
            <li className={style.infoItem}>
              <span className={style.bullet} aria-hidden="true">
                <img src="/icon/tag.svg" width={18} height={18} alt="장소 아이콘" />
              </span>
              <p>
                {meeting.category.location}. {meeting.category.theme}
              </p>
            </li>
            <li className={style.infoItem}>
              <span className={style.bullet} aria-hidden="true">
                <img src="/icon/info.svg" width={18} height={18} alt="정보 아이콘" />
              </span>
              <p>
                {meeting.category.age}, {meeting.category.gender}
              </p>
            </li>
            <li className={style.infoItem}>
              <span className={style.bullet} aria-hidden="true">
                <img src="/icon/people.svg" width={18} height={18} alt="사람들 아이콘" />
              </span>
              <p>{meeting.category.people}</p>
            </li>
            <li className={style.infoItem}>
              <span className={style.bullet} aria-hidden="true">
                <img src="/icon/calendar.svg" width={18} height={18} alt="날짜 아이콘" />
              </span>
              <p>{meeting.date}</p>
            </li>
          </ul>
          <p>{meeting.joined ? '참여 완료' : '참여 가능'}</p>
        </div>
      </div>
      <Link href={`/meetings/${meeting.id}`} className={style.arrowIcon}>
        <img src="/icon/arrow.svg" width={20} height={20} alt="상세보기" />
      </Link>
    </article>
  );
}

export default function HistoryPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  const [filter, setFilter] = useState<'before' | 'after'>('before');

  const filteredMeetings = meetings.filter((meeting) => (filter === 'before' ? !meeting.joined : meeting.joined));

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <h1 className={style.title}>모임 조회</h1>
        <div className={style.btnGroup}>
          <button className={style.beforeBtn} onClick={() => setFilter('before')}>
            참여 전
          </button>
          <button className={style.afterBtn} onClick={() => setFilter('after')}>
            참여 후
          </button>
        </div>
        <div className={style.cardContainer}>
          {isDesktop ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={5}
              slidesPerView={3}
              centeredSlides={true}
              pagination={{ clickable: true }}
              className={style.swiper}
              onSlideChange={(swiper) => {
                //모든 슬라이드 스케일 초기화
                swiper.slides.forEach((slide) => {
                  slide.style.transform = 'scale(0.7)';
                  slide.style.transform = 'transform 0.1s';
                });
                //활성 슬라이드만 1배로
                swiper.slides[swiper.activeIndex].style.transform = 'scale(1)';
              }}
              onInit={(swiper) => {
                //초기 로드시에도 적용
                swiper.slides.forEach((slide, index) => {
                  slide.style.transition = 'transform 0.1s';
                  slide.style.transform = index === swiper.activeIndex ? 'scale(1)' : 'scale(0.7)';
                });
              }}
            >
              {meetings.map((meeting) => (
                <SwiperSlide key={meeting.id} className={style.swiperSlide}>
                  <MeetingCard meeting={meeting} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={style.mobileCardList}>
              {meetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
