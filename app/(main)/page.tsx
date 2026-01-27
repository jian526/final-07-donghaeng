import Image from 'next/image';
import styles from './Main.module.css';
import DefaultLayout from '@/app/components/DefaultLayout';
import Link from 'next/link';

export default function Main() {
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
              <Image className={styles[`search-image`]} src="/icon/search.svg" alt="검색아이콘" width={27} height={27} />
            </div>
          </form>
          <button type="button" className={styles[`ai-recommend`]}>
            <span>AI</span>
            <span>추천</span>
          </button>
        </section>

        {/* 지도 미리보기 */}
        <section className={styles[`map-preview-wrapper`]}>
          <div className={styles[`map-link`]}>
            <Link className={styles[`map-link-text`]} href="/map">
              모임 지도
            </Link>
            <Image src="/icon/right.svg" width={12} height={20} alt="오른쪽화살표"></Image>
          </div>
          <div className={styles[`map-view`]}>
            <div className={styles[`map-image`]} role="img" aria-label="지도 이미지" />
          </div>
        </section>

        {/* 카테고리 별 리스트 */}
        <section className={styles[`section-meetings-wrapper`]}>
          <div className={styles[`section-link`]}>
            <Link href="/meetings">추천 리스트</Link>
            <Image src="/icon/right.svg" width={12} height={20} alt="오른쪽화살표"></Image>
          </div>
          <div className={styles[`section-list`]}>
            <div className={styles[`meetings-wrapper`]}>
              <div className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <Image className={styles[`bookmarks-image`]} src="/icon/bookmark.svg" width={19.83} height={25.5} alt="북마크"></Image>{' '}
              </div>
              <div className={styles[`meetings-title`]}>모임 이름 어쩌구</div>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <div className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <Image className={styles[`bookmarks-image`]} src="/icon/bookmark.svg" width={19.83} height={25.5} alt="북마크"></Image>
              </div>
              <div className={styles[`meetings-title`]}>모임 이름 어쩌구</div>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <div className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <Image className={styles[`bookmarks-image`]} src="/icon/bookmark.svg" width={19.83} height={25.5} alt="북마크"></Image>
              </div>
              <div className={styles[`meetings-title`]}>모임 이름 어쩌구</div>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <div className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <Image className={styles[`bookmarks-image`]} src="/icon/bookmark.svg" width={19.83} height={25.5} alt="북마크"></Image>
              </div>
              <div className={styles[`meetings-title`]}>모임 이름 어쩌구</div>
            </div>
          </div>
        </section>
        <section className={styles[`section-meetings-wrapper`]}>
          <div className={styles[`section-link`]}>
            <Link href="/meetings">요리 / 식도락</Link>
            <Image src="/icon/right.svg" width={12} height={20} alt="오른쪽화살표"></Image>
          </div>
          <div className={styles[`section-list`]}>
            <div className={styles[`meetings-wrapper`]}>
              <div className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <Image className={styles[`bookmarks-image`]} src="/icon/bookmark.svg" width={19.83} height={25.5} alt="북마크"></Image>{' '}
              </div>
              <div className={styles[`meetings-title`]}>모임 이름 어쩌구</div>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <div className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <Image className={styles[`bookmarks-image`]} src="/icon/bookmark.svg" width={19.83} height={25.5} alt="북마크"></Image>
              </div>
              <div className={styles[`meetings-title`]}>모임 이름 어쩌구</div>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <div className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <Image className={styles[`bookmarks-image`]} src="/icon/bookmark.svg" width={19.83} height={25.5} alt="북마크"></Image>
              </div>
              <div className={styles[`meetings-title`]}>모임 이름 어쩌구</div>
            </div>
            <div className={styles[`meetings-wrapper`]}>
              <div className={styles[`meetings-image-box`]}>
                <div className={styles[`temp-image`]}></div>
                <Image className={styles[`bookmarks-image`]} src="/icon/bookmark.svg" width={19.83} height={25.5} alt="북마크"></Image>
              </div>
              <div className={styles[`meetings-title`]}>모임 이름 어쩌구</div>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
