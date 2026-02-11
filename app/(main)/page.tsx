import Image from 'next/image';
import styles from './Main.module.css';
import DefaultLayout from '@/app/components/DefaultLayout';
import Link from 'next/link';
import SearchAiSection from './SearchAiSection';
import CategorySection from './CategorySection';
import { getMeetings } from '@/lib/meetings';
import { Meetings } from '@/types/meetings';
import KakaoMap from '@/app/map/KakaoMap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홈',
  description: 'Moa에서 운동, 요리, 문화, 게임 등 다양한 카테고리의 모임을 찾아보세요. AI 추천으로 나에게 맞는 모임을 발견할 수 있습니다.',
  openGraph: {
    title: '홈 | Moa',
    description: 'Moa에서 다양한 카테고리의 모임을 찾아보세요.',
  },
};

const CATEGORIES = ['운동', '요리 / 제조', '문화 / 공연 / 축제', '게임 / 오락'] as const;

export default async function Main() {
  const res = await getMeetings();
  const meetings: Meetings[] = res.ok === 1 ? res.item : [];

  // 카테고리별 최신 4개 모임
  const categoryMeetings = Object.fromEntries(CATEGORIES.map((category) => [category, meetings.filter((m) => m.extra.category === category).slice(0, 4)])) as Record<(typeof CATEGORIES)[number], Meetings[]>;

  return (
    <DefaultLayout>
      <main className={styles[`main-wrapper`]}>
        <div className={styles[`banner`]} role="img" aria-label="배너 이미지" />
        {/* 검색바 및 ai추천 버튼 */}
        <SearchAiSection />
        {/* 지도 미리보기 */}
        <section className={styles[`map-preview-wrapper`]}>
          <div className={styles[`map-link`]}>
            <Link className={styles[`map-link-text`]} href="/map">
              모임 지도
              <Image src="/icon/right.svg" width={12} height={20} alt="오른쪽화살표" style={{ height: 'auto' }} />
            </Link>
          </div>
          <div className={styles[`map-view`]}>
            <KakaoMap className={styles.map} lat={37.4986} lng={126.9917} meetings={meetings} />
          </div>
        </section>
        {/* 카테고리 별 리스트 */}
        {CATEGORIES.map((category) => (
          <CategorySection key={category} title={category} meetings={categoryMeetings[category]} />
        ))}
      </main>
    </DefaultLayout>
  );
}
