'use client';

import style from './MeetingList.module.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import DefaultLayout from '@/app/components/DefaultLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import BookmarkButton from '@/app/components/BookmarkButton';
import Filter from '@/app/components/Filter';

export default function Meetinglist() {
  const categories = ['전체', '운동', '사교', '인문학/책/글', '아웃도어/여행', '음악/악기', '업종/직무', '문화/공연/축제', '외국/언어', '게임/오락', '공예/만들기', '댄스/무용', '봉사활동', '사진/영상', '자기계발', '스포츠 관람', '반려동물', '요리/제조', '자동차/바이크'];

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  // 임시 모임 데이터
  const meetings = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: '모임 이름 어쩌구',
    location: '서울특별시',
    date: '26.01.31',
    gender: '성별무관',
    age: '나이무관',
    isBookmarked: true,
  }));

  return (
    <>
      <DefaultLayout>
        <main className={style.mainLayout}>
          {/* 데스크톱: 사이드바 카테고리 (왼쪽) */}
          <aside className={style.sidebar}>
            <div className={style.categoryListDesktop}>
              <ul className={style.categoryList}>
                {categories.map((category, index) => (
                  <li key={index} className={`${style.categoryItem} ${selectedCategory === category ? style.active : ''}`} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          {/* 모바일: 가로 Swiper 슬라이드 */}
          <div className={style.categoryListMobile}>
            <Swiper
              className={style.categorySwiper}
              modules={[FreeMode]}
              freeMode={{
                enabled: true,
              }}
              spaceBetween={10}
              slidesPerView="auto"
              grabCursor
            >
              {categories.map((category) => (
                <SwiperSlide key={category} className={style.categorySlide}>
                  <button type="button" className={`${style.categoryChip} ${selectedCategory === category ? style.categoryChipActive : ''}`} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <section className={style.mainContent}>
            <div className={style.breadcrumb}>
              <span>홈</span>
              <span className={style.breadcrumbSeparator}>&gt;</span>
              <span className={style.listTitle}>모임 리스트</span>
            </div>

            <div className={style.headerSection}>
              <div className={style.titleSection}>
                <h1 className={style.pageTitle}>{searchTerm || '모임 리스트'}</h1>
              </div>
              <Link href="/meetings/add" className={style.registerButton}>
                <span className={style.desktopText}>모임 등록하기</span>
                <span className={style.mobileText}>모임 등록</span>
              </Link>
            </div>

            <div className={style.meetingBorder}>
              <div className={style.filterBar}>
                <Filter />
              </div>

              <ul className={style.meetingGrid}>
                {meetings.map((meeting) => (
                  <li key={meeting.id} className={style.card}>
                    <Link href={`/meetings/${meeting.id}`}>
                      <figure className={style.meetingCard}>
                        <div className={style.cardImage}></div>
                        <figcaption className={style.cardContent}>
                          <div className={style.cardHeader}>
                            <h3 className={style.cardTitle}>{meeting.title}</h3>
                            <div className={style.bookmarkIcon}>
                              <BookmarkButton />
                            </div>
                          </div>
                          <div className={style.cardMetadata}>
                            <p className={style.metadataLine}>
                              {meeting.location}. {meeting.date}
                            </p>
                            <p className={style.metadataLine}>
                              {meeting.gender}. {meeting.age}
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
}
