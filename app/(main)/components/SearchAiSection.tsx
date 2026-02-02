'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../Main.module.css';
import AiRecommendModal from './AiRecommendModal';

export default function SearchAiSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
      <AiRecommendModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
