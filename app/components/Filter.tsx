'use client';

import { useState } from 'react';
import styles from './Filter.module.css';

// onFilterChanges prop을 받아오는데 props의 타입은 key: string, value: string 형태로 받아온다.
/*
showCategory는 카테고리를 보여줄지 감출지 선택할 수 있게 만든 props다
전달하지 않을 경우 기본값으로 true를 사용한다.
 */
export default function Filter({ onFilterChanges, showCategory = true }: { onFilterChanges: (key: string, value: string) => void; showCategory?: boolean }) {
  // 선택한 날짜를 저장하는 state
  const [date, setDate] = useState('');

  // 선택한 지역을 저장하는 state
  const [region, setRegion] = useState('');

  // 날짜 포맷 변환 (2026-01-28 -> 01.28)
  const formatDate = (dateString: string) => {
    if (!dateString) return '날짜';
    const [, month, day] = dateString.split('-');
    return `${month}.${day}`;
  };

  // 지역 데이터(객체의 key, value 쌍으로 정의)
  // string과 string으로 이루어진 배열로 정의
  const regionData: Record<string, string[]> = {
    서울: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
    부산: ['강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'],
    대구: ['남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구', '군위군'],
    인천: ['강화군', '계양구', '남동구', '동구', '미추홀구', '부평구', '서구', '연수구', '옹진군', '중구'],
    광주: ['광산구', '남구', '동구', '북구', '서구'],
    대전: ['대덕구', '동구', '서구', '유성구', '중구'],
    울산: ['남구', '동구', '북구', '울주군', '중구'],
    세종: ['세종시'],
    경기: [
      '가평군',
      '고양시',
      '과천시',
      '광명시',
      '광주시',
      '구리시',
      '군포시',
      '김포시',
      '남양주시',
      '동두천시',
      '부천시',
      '성남시',
      '수원시',
      '시흥시',
      '안산시',
      '안성시',
      '안양시',
      '양주시',
      '양평군',
      '여주시',
      '연천군',
      '오산시',
      '용인시',
      '의왕시',
      '의정부시',
      '이천시',
      '파주시',
      '평택시',
      '포천시',
      '하남시',
      '화성시',
    ],
    강원: ['강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '영월군', '원주시', '인제군', '정선군', '철원군', '춘천시', '태백시', '평창군', '홍천군', '화천군', '횡성군'],
    충북: ['괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '제천시', '증평군', '진천군', '청주시', '충주시'],
    충남: ['계룡시', '공주시', '금산군', '논산시', '당진시', '보령시', '부여군', '서산시', '서천군', '아산시', '예산군', '천안시', '청양군', '태안군', '홍성군'],
    전북: ['고창군', '군산시', '김제시', '남원시', '무주군', '부안군', '순창군', '완주군', '익산시', '임실군', '장수군', '전주시', '정읍시', '진안군'],
    전남: ['강진군', '고흥군', '곡성군', '광양시', '구례군', '나주시', '담양군', '목포시', '무안군', '보성군', '순천시', '신안군', '여수시', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군'],
    경북: ['경산시', '경주시', '고령군', '구미시', '김천시', '문경시', '봉화군', '상주시', '성주군', '안동시', '영덕군', '영양군', '영주시', '영천시', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', '포항시'],
    경남: ['거제시', '거창군', '고성군', '김해시', '남해군', '밀양시', '사천시', '산청군', '양산시', '의령군', '진주시', '창녕군', '창원시', '통영시', '하동군', '함안군', '함양군', '합천군'],
    제주: ['제주시', '서귀포시'],
  };

  return (
    <>
      <div className={styles['filter-div']}>
        {showCategory && (
          <div className={`${styles.wrapper} ${styles['category-display']}`}>
            {/* onChange 이벤트를 통해 선택이 바뀔 때 마다 onFilterChanges를 호출하여 실행 */}
            <select name="카테고리" id="" defaultValue="" onChange={(e) => onFilterChanges('category', e.target.value)}>
              <option value="">카테고리</option>
              <option value="운동">운동</option>
              <option value="요리 / 제조">요리 / 제조</option>
              <option value="문화 / 공연 / 축제">문화 / 공연 / 축제</option>
              <option value="게임 / 오락">게임 / 오락</option>
              <option value="사교">사교</option>
              <option value="인문학 / 책 / 글">인문학 / 책 / 글</option>
              <option value="아웃도어 / 여행">아웃도어 / 여행</option>
              <option value="음악 / 악기">음악 / 악기</option>
              <option value="업종 / 직무">업종 / 직무</option>
              <option value="외국 / 언어">외국 / 언어</option>
              <option value="공예 / 만들기">공예 / 만들기</option>
              <option value="댄스 / 무용">댄스 / 무용</option>
              <option value="봉사활동">봉사활동</option>
              <option value="사진 / 영상">사진 / 영상</option>
              <option value="자기계발">자기계발</option>
              <option value="스포츠 관람">스포츠 관람</option>
              <option value="반려동물">반려동물</option>
              <option value="자동차 / 바이크">자동차 / 바이크</option>
            </select>
            <svg width="13" height="9" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
                fill="#c4d9ff"
              />
            </svg>
          </div>
        )}

        {/* 커스텀 날짜 선택 */}
        <div className={`${styles.wrapper} ${styles['date-wrapper']}`}>
          <span>{formatDate(date)}</span>
          <svg width="13" height="9" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
              fill="#c4d9ff"
            />
          </svg>
          <input
            type="date"
            className={styles.dateInput}
            min="2026-01-28"
            onChange={(e) => {
              (setDate(e.target.value), onFilterChanges('date', e.target.value));
            }}
          />
        </div>
        {/* 성별 선택 */}
        <div className={styles.wrapper}>
          <select name="성별" id="" defaultValue="" onChange={(e) => onFilterChanges('gender', e.target.value)}>
            <option value="">성별</option>
            <option value="남">남</option>
            <option value="여">여</option>
            <option value="남녀무관">남녀무관</option>
          </select>
          <svg width="13" height="9" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
              fill="#c4d9ff"
            />
          </svg>
        </div>
        {/* 나이대 선택 */}
        <div className={styles.wrapper}>
          <select name="나이대" id="" defaultValue="" onChange={(e) => onFilterChanges('age', e.target.value)}>
            <option value="">나이대</option>
            <option value="10대">10대</option>
            <option value="20대">20대</option>
            <option value="30대">30대</option>
            <option value="40대 이상">40대 이상</option>
          </select>
          <svg width="13" height="9" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
              fill="#c4d9ff"
            />
          </svg>
        </div>
        {/* 지역 선택 후 시/군/구 선택 */}
        <div className={styles.wrapper}>
          {/* 선택한 지역에 따라 state 변경 및 필터 진행 */}
          <select
            name="지역"
            onChange={(e) => {
              setRegion(e.target.value);
              onFilterChanges('region', e.target.value);
              onFilterChanges('district', '');
            }}
          >
            {/* Object.keys로 regionData의 key만 추출 후 map을 통해 요소 반환*/}
            <option value="">지역</option>
            {Object.keys(regionData).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          <svg width="13" height="9" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
              fill="#c4d9ff"
            />
          </svg>
        </div>
        <div className={styles.wrapper}>
          {/* 지역을 선택하지 않으면 시/군/구 select는 disabled 상태 
          region을 통해 선택한 지역을 파악한 후 객체의 키를 통해 해당하는 배열을 가져와서 출력
          */}
          <select key={region} disabled={!region} onChange={(e) => onFilterChanges('district', e.target.value)}>
            <option value="">{region ? '시/군/구' : '지역을 선택해주세요'}</option>
            {region &&
              regionData[region].map((regionDetail) => (
                <option key={regionDetail} value={regionDetail}>
                  {regionDetail}
                </option>
              ))}
          </select>
          <svg width="13" height="9" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
              fill="#c4d9ff"
            />
          </svg>
        </div>
        {/* 모임 인원 선택 */}
        <div className={styles.wrapper}>
          <select name="인원" id="" defaultValue="" onChange={(e) => onFilterChanges('quantity', e.target.value)}>
            <option value="">인원</option>
            <option value="1 ~ 10명">1 ~ 10명</option>
            <option value="11 ~ 20명">11 ~ 20명</option>
            <option value="21 ~ 30명">21 ~ 30명</option>
            <option value="30명 이상">30명 이상</option>
          </select>
          <svg width="13" height="9" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
              fill="#c4d9ff"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
