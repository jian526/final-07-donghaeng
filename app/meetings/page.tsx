'use client';

import style from './MeetingList.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

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
    <div className={style.container}>
      <Header />
      <div className={style.mainLayout}>
        <aside className={style.sidebar}>
          <h2 className={style.sidebarTitle}>
            전체 카테고리 <span>({categories.length})</span>
          </h2>
          <ul className={style.categoryList}>
            {categories.map((category, index) => (
              <li key={index} className={`${style.categoryItem} ${selectedCategory === category ? style.active : ''}`} onClick={() => setSelectedCategory(category)}>
                {category}
              </li>
            ))}
          </ul>
        </aside>

        <main className={style.mainContent}>
          <div className={style.breadcrumb}>
            <span>홈</span>
            <span className={style.breadcrumbSeparator}>&gt;</span>
            <span>모임 리스트</span>
          </div>

          <div className={style.headerSection}>
            <div className={style.titleSection}>
              <h1 className={style.pageTitle}>{searchTerm || '모임 리스트'}</h1>
            </div>
            <Link href="/meetings/add" className={style.registerButton}>
              모임 등록하기
            </Link>
          </div>
          <div className={style.meetingBorder}>
            <div className={style.filterBar}>
              <div>
                <div className={style.subContainer}>
                  <select name="카테고리" id="" className={style.subContainer}>
                    <option className={style.filterButton} value="">
                      전체
                    </option>
                    <option value="exercise">운동</option>
                    <option value="social">사교</option>
                    <option value="humanities">인문학 / 책 / 글</option>
                    <option value="outdoor">아웃도어 / 여행</option>
                    <option value="music">음악 / 악기</option>
                    <option value="career">업종 / 직무</option>
                    <option value="culture">문화 / 공연 / 축제</option>
                    <option value="language">외국 / 언어</option>
                    <option value="game">게임 / 오락</option>
                    <option value="craft">공예 / 만들기</option>
                    <option value="dance">댄스 / 무용</option>
                    <option value="volunteer">봉사활동</option>
                    <option value="photo">사진 / 영상</option>
                    <option value="self_dev">자기계발</option>
                    <option value="sports_watch">스포츠 관람</option>
                    <option value="pet">반려동물</option>
                    <option value="cooking">요리 / 제조</option>
                  </select>
                  <img src="/icon/down.svg" alt="토글" />
                </div>
                <div className={style.subContainer}>
                  <select className={style.filterButton} name="날짜" id="">
                    <option value="1월">1월</option>
                    <option value="2월">2월</option>
                    <option value="3월">3월</option>
                    <option value="4월">4월</option>
                    <option value="5월">5월</option>
                    <option value="6월">6월</option>
                    <option value="7월">7월</option>
                    <option value="8월">8월</option>
                    <option value="9월">9월</option>
                    <option value="10월">10월</option>
                    <option value="11월">11월</option>
                    <option value="12월">12월</option>
                  </select>
                  <img src="/icon/down.svg" alt="토글" />
                </div>
                <div className={style.subContainer}>
                  <select className={style.filterButton} name="성별" id="">
                    <option value="male">남</option>
                    <option value="female">여</option>
                  </select>
                  <img src="/icon/down.svg" alt="토글" />
                </div>
                <div className={style.subContainer}>
                  <select className={style.filterButton} name="나이대" id="">
                    <option value="teen">10대</option>
                    <option value="twenties">20대</option>
                    <option value="thirties">30대</option>
                    <option value="forties_plus">40대 이상</option>
                  </select>
                  <img src="/icon/down.svg" alt="토글" />
                </div>
                <div className={style.subContainer}>
                  <select className={style.filterButton} name="지역" id="">
                    <option value="seoul">서울특별시</option>
                    <option value="incheon">인천광역시</option>
                    <option value="daejeon">대전광역시</option>
                    <option value="sejong">세종특별자치시</option>
                    <option value="gwangju">광주광역시</option>
                    <option value="daegu">대구광역시</option>
                    <option value="ulsan">울산광역시</option>
                    <option value="busan">부산광역시</option>
                    <option value="gyeonggi">경기도</option>
                    <option value="gangwon">강원특별자치도</option>
                    <option value="chungcheongbukdo">충청북도</option>
                    <option value="chungcheongnamdo">충청남도</option>
                    <option value="jeollanamdo">전라남도</option>
                    <option value="jeollabukdo">전북특별자치도</option>
                    <option value="gyongsangnamdo">경상남도</option>
                    <option value="gyongsangbukdo">경상북도</option>
                    <option value="jeju">제주특별자치도</option>
                  </select>
                  <img src="/icon/down.svg" alt="토글" />
                </div>
                <div className={style.subContainer}>
                  <select className={style.filterButton} name="지역" id="">
                    <option value="jongro">종로구</option>
                    <option value="junggu">중구</option>
                    <option value="yongsan">용산구</option>
                    <option value="seongdong">성동구</option>
                    <option value="gwangjin">광진구</option>
                    <option value="dongdaemun">동대문구</option>
                    <option value="jungnang">중랑구</option>
                    <option value="seongbuk">성북구</option>
                    <option value="gangbuk">강북구</option>
                    <option value="dobong">도봉구</option>
                    <option value="nowon">노원구</option>
                    <option value="eunpyeong">은평구</option>
                    <option value="seodaemun">서대문구</option>
                    <option value="mapo">마포구</option>
                    <option value="yangcheon">양천구</option>
                    <option value="gangseo">강서구</option>
                    <option value="guro">구로구</option>
                    <option value="geumcheon">금천구</option>
                    <option value="youngdeungpo">영등포구</option>
                    <option value="dognjak">동작구</option>
                    <option value="gwanak">관악구</option>
                    <option value="seocho">서초구</option>
                    <option value="gangnam">강남구</option>
                    <option value="songpa">송파구</option>
                  </select>
                  <img src="/icon/down.svg" alt="토글" />
                </div>
                <div className={style.subContainer}>
                  <select className={style.filterButton} name="인원" id="">
                    <option value="">1~10명</option>
                    <option value="">11~20명</option>
                    <option value="">21~30명</option>
                    <option value="">31~40명</option>
                    <option value="">41~50명</option>
                    <option value="">51~60명</option>
                    <option value="">61~70명</option>
                    <option value="">80명 이상</option>
                  </select>
                  <img src="/icon/down.svg" alt="토글" />
                </div>
              </div>
            </div>

            <ul className={style.meetingGrid}>
              {meetings.map((meeting) => (
                <li key={meeting.id} className={style.card}>
                  <figure className={style.meetingCard}>
                    <div className={style.cardImage}>{/* 이미지 placeholder */}</div>
                    <figcaption className={style.cardContent}>
                      <div className={style.cardHeader}>
                        <h3 className={style.cardTitle}>{meeting.title}</h3>
                        <button className={style.bookmarkIcon} aria-label="북마크">
                          <img src="/icon/bookmark-on.svg" alt="북마크" width={24} height={24} />
                        </button>
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
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
