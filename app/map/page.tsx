'use client';

import tag from '@/public/icon/tag.svg';
import calender from '@/public/icon/calendar.svg';
import search from '@/public/icon/search.svg';
import styles from './Map.module.css';
import Filter from '@/app/components/Filter';
import DefaultLayout from '@/app/components/DefaultLayout';
import Image from 'next/image';
import KakaoMap from './KakaoMap';
import { useEffect, useState } from 'react';
import { Meetings } from '@/types/meetings';
import { getMeetings } from '@/lib/meetings';

export default function Map() {
  const [meetings, setMeetings] = useState<Meetings[]>([]);

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
            <Filter />
          </div>
          <div className={styles['map-metting-div']}>
            <div className={styles['metting-list']}>
              <div className={styles['search-bar']}>
                <input type="text" placeholder="검색어를 입력하세요" />
                <Image src={search.src} alt="검색" width={20} height={20} />
              </div>
              <ul>
                {meetings.map((meeting) => (
                  <li key={meeting._id}>
                    <Image src={meeting.mainImages[0].path} alt="모임 사진" width={90} height={80} />
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

            <KakaoMap width="100%" height="700px" lat={37.5709} lng={126.978} className={styles.map} meetings={meetings} />
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
