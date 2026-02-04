import style from './Detail.module.css';
import DefaultLayout from '@/app/components/DefaultLayout';
import Image from 'next/image';
import BookmarkButton from '@/app/components/BookmarkButton';
import { getDetail } from '@/lib/meetings';
import NavigateButton from '@/app/meetings/[id]/NavigateButton';
import { formatDate } from '@/lib/common';
import { getUserInfo } from '@/lib/user';

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await getDetail(id);

  console.log('아이템', res);
  if (res.ok === 0) {
    return (
      <DefaultLayout>
        <main className={style.main}>
          <p>해당 모임이 없습니다.</p>
        </main>
      </DefaultLayout>
    );
  }

  const meeting = res.item;

  const userRes = await getUserInfo(String(meeting.seller_id));
  if (userRes.ok === 0) {
    return (
      <DefaultLayout>
        <main className={style.main}>
          <p>호스트 정보를 가져올 수 없습니다.</p>
        </main>
      </DefaultLayout>
    );
  }
  const hostUser = userRes.item;

  return (
    <DefaultLayout>
      <main className={style.main}>
        <div>
          <div className={style.contentCard}>
            <div className={style.cardHeader}>
              {/* 캐릭터 이미지 - 작은 크기로 왼쪽 상단 */}
              <figure className={style.characterWrapper}>
                {meeting.mainImages && meeting.mainImages[0] && <Image src={meeting.mainImages[0].path} alt={meeting.mainImages[0].name} fill className={style.characterImage} unoptimized />}
                <figcaption className={'sr-only'}>캐릭터 이미지</figcaption>
              </figure>

              {/* 타이틀 + 메타정보 (이미지 옆) */}
              <div className={style.headerContent}>
                <h1 className={style.title}>{meeting.name}</h1>

                {/* meetingInfo: #카테고리 | 장소 · 나이대 · 성별 · 최소 - 최대 인원 */}
                <ul className={style.meetingInfo}>
                  <li className={style.meetingInfoCategory}>#{meeting.extra.category}</li>
                  <li className={style.meetingInfoDivider} aria-hidden="true">
                    |
                  </li>
                  <li>{meeting.extra.region}</li>
                  <li className={style.meetingInfoDot} aria-hidden="true">
                    ·
                  </li>
                  <li>{meeting.extra.age}대</li>
                  <li className={style.meetingInfoDot} aria-hidden="true">
                    ·
                  </li>
                  <li>{meeting.extra.gender}</li>
                  <li className={style.meetingInfoDot} aria-hidden="true">
                    ·
                  </li>
                  <li>
                    {meeting.buyQuantity}명/
                    {meeting.quantity}명
                  </li>
                  <li className={style.meetingInfoDot} aria-hidden="true">
                    ·
                  </li>
                  <li>{formatDate(meeting.extra.date)}</li>
                </ul>
              </div>

              {/* 북마크 버튼 - 카드 우측 상단 고정 */}
              <div className={style.bookmarkPart}>
                <BookmarkButton meetingId={meeting._id} width={27} height={35} desktopWidth={40} desktopHeight={45} />
              </div>
            </div>

            {/* 본문 콘텐츠 */}
            <div className={style.contentBody}>
              <p>{meeting.content}</p>
            </div>
          </div>

          {/* 호스트 정보 섹션 */}
          <div className={style.bottomSection}>
            <figure className={style.userCharacterWrapper}>
              <div className={style.userCharacterImage}></div>
              <figcaption className={'sr-only'}>사용자 캐릭터</figcaption>
            </figure>

            <div className={style.hostInfo}>
              {/* 이름 + 하트 BPM (같은 줄) */}
              <div className={style.statusRow}>
                <div className={style.hostNameRow}>
                  <p className={style.userName}>{hostUser.name}</p>
                  <div className={style.userStatus}>
                    <span className={style.heartIcon} aria-hidden="true"></span>
                    <div className={style.bpm}>
                      <p className={style.beatPoint}>{hostUser.bpm}</p>
                      <br />
                      <p>BPM</p>
                    </div>
                  </div>
                </div>

                {/* 상태 메시지 (이름 아래) */}
                <p className={style.statusText}>{hostUser.comment || '상태 메시지 없음'}</p>
              </div>

              {/* 채팅 버튼 - 우측 끝 */}
              <div className={style.chatButton} aria-label="채팅하기">
                <Image src="/icon/chatting.svg" width={56} height={56} alt="채팅" aria-hidden="true" />
              </div>
            </div>
          </div>
          <NavigateButton meeting={meeting} />
        </div>
      </main>
    </DefaultLayout>
  );
}
