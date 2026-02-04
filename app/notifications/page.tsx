'use client';

import DefaultLayout from '@/app/components/DefaultLayout';
import styles from './notifications.module.css';
import { useNoti } from '@/hooks/useNoti';
import NotificationItem from '@/app/components/NotificationItem';

export default function Notifications() {
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

          {notifications.length > 0 ? notifications.map((noti) => <NotificationItem key={noti._id} notification={noti} />) : <p>알림이 없습니다.</p>}
        </div>
      </main>
    </DefaultLayout>
  );
}
