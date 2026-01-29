'use client';

import { useState } from 'react';
import style from './Detail.module.css';
import DefaultLayout from '@/app/components/DefaultLayout';
import Image from 'next/image';
import BookmarkButton from '@/app/components/BookmarkButton';

export default function Detail({ isHost = true }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleJoin = () => {
    console.log('신청하기 클릭');
    // 신청 로직
  };

  const handleAdmit = () => {
    console.log('관리하기 클릭');
    // 관리 페이지로 이동
  };
  const handleEdit = () => {
    console.log('수정하기 클릭');
    // 수정 페이지로 이동
  };

  const handleDelete = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      console.log('삭제하기 클릭');
      // 삭제 로직
    }
  };

  return (
    <>
      <DefaultLayout>
        <main className={style.main}>
          <div className={style.contentCard}>
            <div className={style.cardHeader}>
              <figure className={style.characterWrapper}>
                <div className={style.characterImage}></div>
                <figcaption className={'sr-only'}>캐릭터 이미지</figcaption>
              </figure>
              <div className={style.titleSection}>
                <h1 className={style.title}>모아 팀프로젝트</h1>
                <p className={style.dates}>26.1.27(화) 오후 3:00</p>
              </div>
              <BookmarkButton width={27} height={35} desktopWidth={40} desktopHeight={45} />
            </div>
            <div className={style.contentBody}>
              <p>
                이것은 로렘 입숨입니다
                <br />
                로렘입숨숨숨 아 졸리네요. 집가고싶다
                <br />
                집이긴합니다 아 졸려 행간을 조금 더 늘려봐야겠습니다
                <br /> 사실 제 취향은 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
          </div>

          <div className={style.bottomSection}>
            <figure className={style.userCharacterWrapper}>
              <div className={style.userCharacterImage}></div>
              <figcaption className={'sr-only'}>사용자 캐릭터</figcaption>
            </figure>
            <div className={style.infos}>
              <div className={style.wrapper}>
                <div className={style.info}>
                  <div className={style.userInfo}>
                    <p className={style.userName}>김지안</p>
                    <p className={style.statusText}>힘들어요.....</p>
                  </div>

                  <div className={style.userStatus}>
                    <span className={style.heartIcon} aria-hidden="true"></span>
                    <div className={style.bpm}>
                      <span>90</span>
                      <span>BPM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.chatButton} aria-label="채팅하기">
                <Image src="/icon/chatting.svg" width={56} height={56} alt="채팅" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className={style.buttonContainer}>
            {!isHost ? (
              // 일반 신청자 모드
              <div className={style.userMode}>
                <button className={style.applyBtn} onClick={handleJoin}>
                  신청하기
                </button>
              </div>
            ) : (
              // 호스트 모드
              <div className={style.hostMode}>
                <button className={style.adminBtn} onClick={handleAdmit}>
                  관리하기
                </button>
                <button className={style.editBtn} onClick={handleEdit}>
                  수정하기
                </button>
                <button className={style.deleteBtn} onClick={handleDelete}>
                  삭제하기
                </button>
              </div>
            )}
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
