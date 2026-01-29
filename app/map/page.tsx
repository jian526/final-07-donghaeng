import dobai from './images/doobai.png';
import tag from '@/public/icon/tag.svg';
import info from '@/public/icon/info.svg';
import people from '@/public/icon/people.svg';
import calender from '@/public/icon/calendar.svg';
import search from '@/public/icon/search.svg';
import styles from './Map.module.css';
import Filter from '@/app/components/Filter';
import DefaultLayout from '@/app/components/DefaultLayout';
import Image from 'next/image';
import KakaoMap from './KakaoMap';

export default function Map() {
  return (
    <>
      <DefaultLayout>
        <main className={styles['map-body']}>
          <div className={styles['filter-div']}>
            <Filter />
          </div>
          <div className={styles['map-metting-div']}>
            <div className={styles['metting-list']}>
              <div className={styles['search-bar']}>
                <input type="text" placeholder="검색어를 입력하세요" />
                <Image src={search.src} alt="검색" width={20} height={20} />
              </div>
              <ul>
                <li>
                  <Image src={dobai.src} alt="모임 사진" width={90} height={80} />
                  <div>
                    <dt>세상에서 제일 비싼 두쫀쿠 만들기</dt>
                    <dd>서울특별시 마포구 . 보드게임, 20대</dd>
                  </div>
                </li>
                <li>
                  <Image src={dobai.src} alt="모임 사진" width={90} height={80} />
                  <div>
                    <dt>세상에서 제일 비싼 두쫀쿠 만들기</dt>
                    <dd>서울특별시 마포구 . 보드게임, 20대</dd>
                  </div>
                </li>
                <li>
                  <Image src={dobai.src} alt="모임 사진" width={90} height={80} />
                  <div>
                    <dt>세상에서 제일 비싼 두쫀쿠 만들기</dt>
                    <dd>서울특별시 마포구 . 보드게임, 20대</dd>
                  </div>
                </li>
                <li>
                  <Image src={dobai.src} alt="모임 사진" width={90} height={80} />
                  <div>
                    <dt>세상에서 제일 비싼 두쫀쿠 만들기</dt>
                    <dd>서울특별시 마포구 . 보드게임, 20대</dd>
                  </div>
                </li>
                <li>
                  <Image src={dobai.src} alt="모임 사진" width={90} height={80} />
                  <div>
                    <dt>세상에서 제일 비싼 두쫀쿠 만들기</dt>
                    <dd>서울특별시 마포구 . 보드게임, 20대</dd>
                  </div>
                </li>
                <li>
                  <Image src={dobai.src} alt="모임 사진" width={90} height={80} />
                  <div>
                    <dt>세상에서 제일 비싼 두쫀쿠 만들기</dt>
                    <dd>서울특별시 마포구 . 보드게임, 20대</dd>
                  </div>
                </li>
                <li>
                  <Image src={dobai.src} alt="모임 사진" width={90} height={80} />
                  <div>
                    <dt>세상에서 제일 비싼 두쫀쿠 만들기</dt>
                    <dd>서울특별시 마포구 . 보드게임, 20대</dd>
                  </div>
                </li>
              </ul>
            </div>

            <KakaoMap width="100%" height="500px" lat={37.5709} lng={126.978} className={styles.map} />
          </div>
          <div className={styles['metting-div']}>
            <div className={styles['metting-information']}>
              <Image src={dobai.src} alt="모임 사진" width={150} height={150} className={styles['metting-information-img']} />
              <div className={styles['detail-information']}>
                <h3>세상에서 제일 비싼 두쫀쿠 만들기</h3>
                <p>
                  <Image src={tag.src} alt="태그" width={14} height={12} />
                  마포구. 보드게임
                </p>
                <p>
                  <Image src={info.src} alt="나이 성별" width={14} height={11} />
                  20 ~ 30대, 남녀무관
                </p>
                <p>
                  <Image src={people.src} alt="인원" width={14} height={11} />
                  인원 4명 ~ 5명
                </p>
                <p>
                  <Image src={calender.src} alt="캘린더" width={14} height={12} />
                  26.1.27(화) 오후 3:00
                </p>
              </div>
            </div>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
