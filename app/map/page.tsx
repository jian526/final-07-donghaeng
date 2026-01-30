'use client';

import tag from '@/public/icon/tag.svg';
import calender from '@/public/icon/calendar.svg';
import search from '@/public/icon/search.svg';
import logo from '@/public/logo/logo.svg';
import styles from './Map.module.css';
import Filter from '@/app/components/Filter';
import DefaultLayout from '@/app/components/DefaultLayout';
import Image from 'next/image';
import KakaoMap from './KakaoMap';
import { useEffect, useState } from 'react';
import { Meetings } from '@/types/meetings';
import { getMeetings } from '@/lib/meetings';

export default function Map() {
  // api 데이터를 저장하는 배열
  const [meetings, setMeetings] = useState<Meetings[]>([]);
  // 모임 리스트에서 모임 클릭 시 id를 저장할 state
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // 필터 값을 저장하는 state
  const [filters, setFilters] = useState({
    category: '',
    date: '',
    gender: '',
    age: '',
    region: '',
    quantity: '',
  });

  // 필터 값이 바뀔 때 호출되는 함수
  const hanldeFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // 필터 조건에 맞는 모임만 걸러내는 변수
  const filteredMeetings = meetings.filter((meeting) => {
    // 카테고리 필터: 값이 비어있으면 통과, 있으면 일치하는 것만 체크
    if (filters.category && meeting.extra.category !== filters.category) return false;
    // 날짜 필터
    if (filters.date && meeting.extra.date !== filters.date) return false;
    // 성별 필터
    if (filters.gender && meeting.extra.gender !== filters.gender) return false;
    // 나이대 필터
    if (filters.age) {
      const ageGroup = meeting.extra.age >= 40 ? '40대 이상' : `${Math.floor(meeting.extra.age / 10) * 10}대`;
      if (ageGroup !== filters.age) return false;
    }
    // 지역 필터
    if (filters.region && !meeting.extra.region.includes(filters.region)) return false;
    // 인원 필터
    if (filters.quantity) {
      const q = meeting.quantity;
      if (filters.quantity === '1 ~ 10명' && (q < 1 || q > 10)) return false;
      if (filters.quantity === '11 ~ 20명' && (q < 11 || q > 20)) return false;
      if (filters.quantity === '21 ~ 30명' && (q < 21 || q > 30)) return false;
      if (filters.quantity === '30명 이상' && q < 30) return false;
    }
    return true;
  });

  // api 호출해서 모임 정보를 가져오는 useEffect
  useEffect(() => {
    const fetchMeetings = async () => {
      const res = await getMeetings();
      if (res.ok === 1) {
        setMeetings(res.item);
      }
    };
    fetchMeetings();
  }, []);

  return (
    <>
      <DefaultLayout>
        <main className={styles['map-body']}>
          <div className={styles['filter-div']}>
            {/* onFilterChanges: 사용자가 정의한 함수명
            onChange는 React에서 콜백 props의 관례이기 때문에 이를 피하기 위함
             */}
            <Filter onFilterChanges={hanldeFilterChange} />
          </div>
          <div className={styles['map-metting-div']}>
            <div className={styles['metting-list']}>
              <div className={styles['search-bar']}>
                <input type="text" placeholder="검색어를 입력하세요" />
                <Image src={search.src} alt="검색" width={20} height={20} />
              </div>
              <ul>
                {filteredMeetings.map((meeting) => (
                  // li 클릭 시 해당되는 모임 id 저장

                  <li
                    key={meeting._id}
                    onClick={() => {
                      console.log('클릭한 모임 id:', meeting._id);
                      setSelectedId(meeting._id);
                    }}
                  >
                    <Image src={meeting.mainImages[0]?.path || logo.src} alt="모임 사진" width={90} height={80} />
                    <div className={styles['meeting-info-li-div']}>
                      <dt>{meeting.name}</dt>
                      <dd>
                        <Image src={tag.src} alt="태그" width={20} height={12} />
                        {meeting.extra.region} . {meeting.extra.category}
                      </dd>
                      <dd>
                        <Image src={calender.src} alt="정보" width={20} height={12} /> {meeting.extra.date}
                      </dd>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* props로 필요한 정보들 전달 */}
            <KakaoMap width="100%" height="700px" lat={37.5709} lng={126.978} className={styles.map} meetings={filteredMeetings} selectedId={selectedId} />
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
