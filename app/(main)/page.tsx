'use client';

import Image from 'next/image';
import styles from './Main.module.css';
import DefaultLayout from '@/app/components/DefaultLayout';
import Link from 'next/link';
import BookmarkButton from '@/app/components/BookmarkButton';
import AiRecommendModal from './components/AiRecommendModal';
import { useState } from 'react';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DefaultLayout>
      <main className={styles[`main-wrapper`]}>
        <div className={styles[`banner`]} role="img" aria-label="배너 이미지" />
        {/* 검색바 및 ai추천 버튼 */}
        <section className={styles[`search-ai-wrapper`]}>
          <form className={styles[`search-bar-wrapper`]}>
            <div className={styles[`input-image-wrapper`]}>
              <label htmlFor="search-bar" className="sr-only">
                모임 검색
              </label>
              <input className={styles[`search-bar`]} type="search" id="search-bar" placeholder="관심 있는 모임을 검색으로 찾아보세요!" />
              <button type="submit">
                <Image className={styles[`search-image`]} src="/icon/search.svg" alt="검색아이콘" width={27} height={27} />
              </button>
            </div>
          </form>
          <button type="button" className={styles[`ai-recommend`]} onClick={() => setIsModalOpen(true)}>
            <span>AI</span>
            <span>추천</span>
          </button>
        </section>
        {/* 지도 미리보기 */}
        <section className={styles[`map-preview-wrapper`]}>
          <div className={styles[`map-link`]}>
            <Link className={styles[`map-link-text`]} href="/map">
              모임 지도<Image src="/icon/right.svg" width={12} height={20} alt="오른쪽화살표"></Image>
            </Link>
          </div>
          <div className={styles[`map-view`]}>
            <div className={styles[`map-image`]} role="img" aria-label="지도 이미지" />
          </div>
        </section>
        {/* 카테고리 별 리스트 */}
        <section className={styles[`section-meetings-wrapper`]}>
          <div className={styles[`section-link`]}>
            <Link href="/meetings" className={styles[`section-link-text`]}>
              추천 리스트<Image src="/icon/right.svg" width={12} height={20} alt="오른쪽화살표"></Image>
            </Link>
          </div>
          <div className={styles[`section-list`]}>
            <div className={styles[`meetings-wrapper`]}>
              <Link href="/meetings/1" className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <BookmarkButton />
              </Link>
              <Link href="/meetings/1" className={styles[`meetings-title`]}>
                모임 이름 어쩌구
              </Link>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <Link href="/meetings/1" className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <BookmarkButton />
              </Link>
              <Link href="/meetings/1" className={styles[`meetings-title`]}>
                모임 이름 어쩌구
              </Link>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <Link href="/meetings/1" className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <BookmarkButton />
              </Link>
              <Link href="/meetings/1" className={styles[`meetings-title`]}>
                모임 이름 어쩌구
              </Link>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <Link href="/meetings/1" className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <BookmarkButton />
              </Link>
              <Link href="/meetings/1" className={styles[`meetings-title`]}>
                모임 이름 어쩌구
              </Link>
            </div>
          </div>
        </section>
        <section className={styles[`section-meetings-wrapper`]}>
          <div className={styles[`section-link`]}>
            <Link href="/meetings" className={styles[`section-link-text`]}>
              요리 / 식도락
              <Image src="/icon/right.svg" width={12} height={20} alt="오른쪽화살표"></Image>
            </Link>
          </div>
          <div className={styles[`section-list`]}>
            <div className={styles[`meetings-wrapper`]}>
              <Link href="/meetings/1" className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <BookmarkButton />
              </Link>
              <Link href="/meetings/1" className={styles[`meetings-title`]}>
                모임 이름 어쩌구
              </Link>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <Link href="/meetings/1" className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <BookmarkButton />
              </Link>
              <Link href="/meetings/1" className={styles[`meetings-title`]}>
                모임 이름 어쩌구
              </Link>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <Link href="/meetings/1" className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <BookmarkButton />
              </Link>
              <Link href="/meetings/1" className={styles[`meetings-title`]}>
                모임 이름 어쩌구
              </Link>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <Link href="/meetings/1" className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <BookmarkButton />
              </Link>
              <Link href="/meetings/1" className={styles[`meetings-title`]}>
                모임 이름 어쩌구
              </Link>
            </div>
          </div>
        </section>
        <AiRecommendModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </DefaultLayout>
  );
}
