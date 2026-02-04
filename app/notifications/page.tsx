'use client';

import DefaultLayout from '@/app/components/DefaultLayout';
import styles from './notifications.module.css';
import { useNoti } from '@/hooks/useNoti';
import NotificationItem from '@/app/components/NotificationItem';

export default function Notifications() {
  // useNoti 훅 사용 { 알람, 전체 읽기, 전체 삭제 }
  const { notifications, markAllRead, deleteAll } = useNoti();
  return (
    <DefaultLayout>
      <main className={styles['main']}>
        <div className={styles['notifications-wrap']}>
          <h2>알림</h2>
          <div className={styles['btn']}>
            <button onClick={markAllRead}>전체 읽음</button>
            <button onClick={deleteAll}>전체 삭제</button>
          </div>
          {/* 알람의 길이가 0보다 크면 맵을 생성하면서 알림 아이템 컴포넌트 불러오기 */}
          {notifications.length > 0 ? notifications.map((noti) => <NotificationItem key={noti._id} notification={noti} />) : <p>알림이 없습니다.</p>}
        </div>
      </main>
    </DefaultLayout>
  );
}
