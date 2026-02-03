'use client';
import style from './MeetingList.module.css';
import Link from 'next/link';
import DefaultLayout from '@/app/components/DefaultLayout';

import { getMeetings } from '@/lib/meetings';
import Category from '@/app/meetings/Category';
import MeetingItem from '@/app/meetings/MeetingItem';
import { getAllBookmarks } from '@/lib/bookmarks';
import useUserStore from '@/zustand/userStore';
import { useEffect, useState } from 'react';
import { ErrorRes, MeetingsListRes } from '@/types/api';
import { BookmarkResponse, Bookmarks, BookmarksResponse } from '@/types/bookmarks';
import useBookmarkStore from '@/zustand/bookmarkStore';

export default function Meetinglist() {
  const { user } = useUserStore();
  const accessToken = user?.token?.accessToken || '';
  const [result, setResult] = useState<MeetingsListRes | ErrorRes>();
  const { bookmarks, setBookmarks } = useBookmarkStore();

  useEffect(() => {
    const getDefaultData = async () => {
      const result = await getMeetings();
      setResult(result);
    };
    getDefaultData();
  }, []);

  useEffect(() => {
    const fetchBookmarks = async () => {
      console.log('fetchBookmarks useEffect - user:', user, 'accessToken:', accessToken);
      if (user && accessToken) {
        const myBookmarks = (await getAllBookmarks(accessToken)) as BookmarksResponse;
        console.log('myBookmarks response:', myBookmarks);
        const bookmarkItems = myBookmarks.item;
        setBookmarks(bookmarkItems as Bookmarks[]);
        console.log('setBookmarks called with:', bookmarkItems);
      }
    };
    fetchBookmarks();
  }, [user, accessToken, setBookmarks]);

  return (
    <>
      <DefaultLayout>
        <main className={style.mainLayout}>
          {/* 데스크톱: 사이드바 카테고리 (왼쪽) */}
          <div className={style.topHeader}>
            <div className={style.breadcrumb}>
              <span>홈</span>
              <span className={style.breadcrumbSeparator}>&gt;</span>
              <span className={style.listTitle}>모임 리스트</span>
            </div>
            <div className={style.headerSection}>
              <div className={style.titleSection}>
                <h1 className={style.pageTitle}>{'모임 리스트'}</h1>
              </div>
              <Link href="/meetings/add" className={style.registerButton}>
                <span className={style.desktopText}>모임 등록하기</span>
                <span className={style.mobileText}>모임 등록</span>
              </Link>
            </div>
          </div>
          <div className={style.row}>
            <Category />

            <section className={style.mainContent}>
              <div className={style.meetingBorder}>
                <div className={style.filterBar}></div>

                <ul className={style.meetingGrid}>{result && bookmarks && result.ok ? result.item.map((meeting) => <MeetingItem key={meeting._id} meeting={meeting} />) : <p>에러발생</p>}</ul>
              </div>
            </section>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
