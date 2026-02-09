import style from './MeetingList.module.css';
import Link from 'next/link';
import DefaultLayout from '@/app/components/DefaultLayout';
import { getMeetings } from '@/lib/meetings';
import Category from '@/app/meetings/Category';
import MeetingItem from '@/app/meetings/MeetingItem';

const categoryNameMap: Record<string, string> = {
  health: '운동',
  cook: '요리 / 제조',
  festival: '문화 / 공연 / 축제',
  arcade: '게임 / 오락',
  book: '인문학 / 책 / 글',
  outdoor: '아웃도어 / 여행',
  social: '사교',
  music: '음악 / 악기',
  job: '업종 / 직무',
  language: '외국 / 언어',
  make: '공예 / 만들기',
  dance: '댄스 / 무용',
  volunteer: '봉사활동',
  picture: '사진 / 영상',
  self: '자기계발',
  sports: '스포츠 관람',
  pet: '반려동물',
  bike: '자동차 / 바이크',
};

interface PageProps {
  searchParams: Promise<{ keyword?: string; category?: string }>;
}

export default async function Meetinglist({ searchParams }: PageProps) {
  const { keyword, category } = await searchParams;
  const categoryName = category && category !== 'all' ? categoryNameMap[category] : '';
  const result = await getMeetings(keyword, category); // 키워드에 대한 모임리스트 조회

  return (
    <>
      <DefaultLayout>
        <main className={style.mainLayout}>
          {/* 데스크톱: 사이드바 카테고리 (왼쪽) */}
          <div className={style.topHeader}>
            <div className={style.breadcrumb}>
              <span>홈</span>
              <span className={style.breadcrumbSeparator}>&gt;</span>
              <span className={style.listTitle}>{categoryName || '모임 리스트'}</span>
            </div>
            <div className={style.headerSection}>
              <div className={style.titleSection}>
                <h1 className={style.pageTitle}>{keyword ? `"${keyword}"` : categoryName || '모임 리스트'}</h1>
                <Link href="/meetings/add" className={style.registerButton}>
                  <span className={style.desktopText}>모임 등록하기</span>
                  <span className={style.mobileText}>모임 등록</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.row}>
            <Category />

            <section className={style.mainContent}>
              <div className={style.meetingBorder}>
                <div className={style.filterBar}></div>
                {result.ok ? (
                  result.item.length > 0 ? (
                    <ul className={style.meetingGrid}>
                      {result.item.map((meeting) => (
                        <MeetingItem key={meeting._id} meeting={meeting} />
                      ))}
                    </ul>
                  ) : (
                    <div className={style['none-data']}>검색 결과가 없습니다.</div>
                  )
                ) : (
                  <p>에러발생</p>
                )}
              </div>
            </section>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
