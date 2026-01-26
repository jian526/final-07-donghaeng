import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Image from 'next/image';
import styles from './Main.module.css';

export default function Main() {
  return (
    <>
      <Header />
      <Image className={styles[`mobile-banner`]} src="/image/banner-mobile.png" width={500} height={230} alt="로고 이미지" />
      <div className={styles[`search-ai-wrapper`]}>
        <form className={styles[`search-bar-wrapper`]}>
          <label htmlFor="search-bar" className="sr-only">
            모임 검색
          </label>
          <input className={styles[`search-bar`]} type="search" id="search-bar" />
          <Image className={styles[`search-image`]} src="/icon/search.svg" alt="검색아이콘" width={20} height={20} />
        </form>
        <button type="button" className={styles[`ai-recommend`]}>
          <span>AI</span>
          <span>추천</span>
        </button>
      </div>
      <Footer />
    </>
  );
}
