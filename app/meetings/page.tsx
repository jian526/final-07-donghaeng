'use client';

import style from './MeetingList.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DefaultLayout from '@/app/components/DefaultLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import BookmarkButton from '@/app/components/BookmarkButton';
import Filter from '@/app/components/Filter';
import { Meetings } from '@/types/meetings';

export default function Meetinglist() {
  const categories = [
    '전체',
    '운동',
    '요리 / 제조',
    '문화 / 공연 / 축제',
    '게임 / 오락',
    '인문학 / 책 / 글',
    '아웃도어 / 여행',
    '사교',
    '음악 / 악기',
    '업종 / 직무',
    '외국 / 언어',
    '공예 / 만들기',
    '댄스 / 무용',
    '봉사활동',
    '사진 / 영상',
    '자기계발',
    '스포츠 관람',
    '반려동물',
    '자동차 / 바이크',
  ];

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const [meetings, setMeetings] = useState<Meetings[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API에서 모임 데이터 가져오기
  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
          headers: {
            'Client-Id': process.env.NEXT_PUBLIC_CLIENT_ID || '',
          },
        });

        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다');
        }

        const data = await response.json();

        // API 응답 구조에 맞게 데이터 매핑
        setMeetings(data.item || data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다');
        console.error('모임 데이터 로딩 오류:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  // 날짜 포맷 변환 함수 (예: 2026-01-31 -> 26.01.31)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = String(date.getFullYear()).slice(2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  // 성별 표시 함수
  const getGenderText = (gender: string) => {
    if (gender === 'all') return '성별무관';
    if (gender === 'male') return '남성만';
    if (gender === 'female') return '여성만';
    return gender;
  };

  // 나이 표시 함수
  const getAgeText = (age: number) => {
    if (age === 0) return '나이무관';
    return `${age}세 이상`;
  };

  // 로딩 상태
  if (loading) {
    return (
      <DefaultLayout>
        <main className={style.mainLayout}>
          <div className={style.loadingContainer}>
            <p>모임 데이터를 불러오는 중...</p>
          </div>
        </main>
      </DefaultLayout>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <DefaultLayout>
        <main className={style.mainLayout}>
          <div className={style.errorContainer}>
            <p>오류: {error}</p>
            <button onClick={() => window.location.reload()}>다시 시도</button>
          </div>
        </main>
      </DefaultLayout>
    );
  }

  return (
    <>
      <DefaultLayout>
        <main className={style.mainLayout}>
          {/* 데스크톱: 사이드바 카테고리 (왼쪽) */}
          <div className={style.topHeader}>
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
          </div>
          <div className={style.row}>
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
              <div className={style.meetingBorder}>
                <div className={style.filterBar}>
                  <Filter />
                </div>

                <ul className={style.meetingGrid}>
                  {meetings.length > 0 ? (
                    meetings.map((meeting) => (
                      <li key={meeting._id} className={style.card}>
                        <Link href={`/meetings/${meeting._id}`}>
                          <figure className={style.meetingCard}>
                            <div
                              className={style.cardImage}
                              style={{
                                backgroundImage: meeting.mainImages?.[0]?.path ? `url(${meeting.mainImages[0].path})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }}
                            ></div>
                            <figcaption className={style.cardContent}>
                              <div className={style.cardHeader}>
                                <h3 className={style.cardTitle}>{meeting.name}</h3>
                                <div className={style.bookmarkIcon}>
                                  <BookmarkButton />
                                </div>
                              </div>
                              <div className={style.cardMetadata}>
                                <p className={style.metadataLine}>
                                  {meeting.extra.region}. {formatDate(meeting.extra.date)}
                                </p>
                                <p className={style.metadataLine}>
                                  {getGenderText(meeting.extra.gender)}. {getAgeText(meeting.extra.age)}
                                </p>
                              </div>
                            </figcaption>
                          </figure>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className={style.emptyState}>
                      <p>등록된 모임이 없습니다.</p>
                    </li>
                  )}
                </ul>
              </div>
            </section>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
