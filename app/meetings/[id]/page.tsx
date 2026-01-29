'use client';

import style from './Detail.module.css';
import DefaultLayout from '@/app/components/DefaultLayout';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import BookmarkButton from '@/app/components/BookmarkButton';
import { useEffect } from 'react';
import { API_URL, CLIENT_ID } from '@/lib/user';
import useUserStore from '@/zustand/userStore';
import useMeetingStore from '@/zustand/meetingStore';

export default function Detail() {
  const router = useRouter();
  const params = useParams();
  const _id = params.id;

  const { user, isLogin, isHydrated } = useUserStore();
  const { selectedMeeting: meeting, setSelectedMeeting, loading, setLoading } = useMeetingStore();

  // ✅ 로그인한 사용자가 호스트인지 확인
  const isHost = isLogin && user && meeting && user._id === meeting.seller_id;

  useEffect(() => {
    // hydration이 완료되기 전에는 아무것도 하지 않음
    if (!isHydrated) return;

    const fetchMeeting = async () => {
      // ✅ 로그인 체크 추가
      if (!isLogin || !user?.token?.accessToken) {
        alert('로그인이 필요합니다.');
        router.push('/login');
        return;
      }

      setLoading(true);
      console.log('요청 시작, _id:', _id);

      try {
        const response = await fetch(`${API_URL}/seller/products/${_id}`, {
          headers: {
            'client-id': CLIENT_ID,
            Authorization: `Bearer ${user.token.accessToken}`, // ✅ 항상 포함
          },
        });

        console.log('응답 상태:', response.status);

        if (response.ok) {
          const data = await response.json();
          console.log('받아온 데이터:', data);
          setSelectedMeeting(data.item);
        } else {
          const errorData = await response.json();
          console.error('에러 응답:', errorData);
          alert('데이터를 불러오는데 실패했습니다.');
        }
      } catch (error) {
        console.error('데이터 로딩 중 오류', error);
        alert('오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    if (_id) {
      fetchMeeting();
    }
  }, [_id, isLogin, user, isHydrated, setSelectedMeeting, setLoading, router]);

  const handleJoin = () => {
    // 신청하기는 로그인 필요
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }
    console.log('신청하기 클릭');
    router.push(`/meetings/${_id}/apply`);
  };

  const handleAdmit = () => {
    console.log('관리하기 클릭');
    router.push(`/meetings/${_id}/manage`);
  };

  const handleEdit = () => {
    console.log('수정하기 클릭');
    router.push(`/meetings/${_id}/edit`);
  };

  const handleDelete = async () => {
    // 삭제는 로그인 필수
    if (!isLogin || !user) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }

    if (confirm('정말 삭제하시겠습니까?')) {
      console.log('삭제하기 클릭');

      try {
        const response = await fetch(`${API_URL}/seller/products/${_id}`, {
          method: 'DELETE',
          headers: {
            'client-id': CLIENT_ID,
            Authorization: `Bearer ${user.token?.accessToken}`,
          },
        });

        if (response.ok) {
          alert('삭제되었습니다');
          setSelectedMeeting(null); // ✅ 스토어 초기화
          router.push('/');
        } else {
          const errorData = await response.json();
          console.error('삭제 실패:', errorData);
          alert('삭제에 실패했습니다.');
        }
      } catch (error) {
        console.error('삭제 중 오류 발생', error);
        alert('삭제 중 오류가 발생했습니다.');
      }
    }
  };

  // hydration 전이거나 로딩 중일 때
  if (!isHydrated || loading) {
    return (
      <DefaultLayout>
        <main className={style.main}>
          <p>로딩 중...</p>
        </main>
      </DefaultLayout>
    );
  }

  if (!meeting) {
    return (
      <DefaultLayout>
        <main className={style.main}>
          <p>모임을 찾을 수 없습니다.</p>
        </main>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <main className={style.main}>
        <div className={style.contentCard}>
          <div className={style.cardHeader}>
            <figure className={style.characterWrapper}>
              {meeting.mainImages && meeting.mainImages[0] && <Image src={`${API_URL}${meeting.mainImages[0].path}`} alt={meeting.mainImages[0].name} fill className={style.characterImage} />}
              <figcaption className={'sr-only'}>캐릭터 이미지</figcaption>
            </figure>
            <div className={style.titleSection}>
              <h1 className={style.title}>{meeting.name}</h1>
              <p className={style.dates}>{meeting.extra.date}</p>
            </div>
            <BookmarkButton width={27} height={35} desktopWidth={40} desktopHeight={45} />
          </div>
          <div className={style.contentBody}>
            <p>{meeting.content}</p>
            {/* ✅ 추가 정보 표시 */}
            <div className={style.meetingInfo}>
              <p>카테고리: {meeting.extra.category}</p>
              <p>지역: {meeting.extra.region}</p>
              <p>성별: {meeting.extra.gender}</p>
              <p>연령: {meeting.extra.age}세</p>
              <p>모집인원: {meeting.quantity}명</p>
              <p>신청인원: {meeting.buyQuantity}명</p>
            </div>
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
                  <p className={style.userName}>호스트 ID: {meeting.seller_id}</p>
                  <p className={style.statusText}>{meeting.extra.survey1 || '상태 메시지 없음'}</p>
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

        {/* ✅ 버튼 영역 - 동적으로 표시 */}
        <div className={style.buttonContainer}>
          {!isHost ? (
            // 일반 사용자 모드
            <div className={style.userMode}>
              <button className={style.applyBtn} onClick={handleJoin}>
                신청하기
              </button>
            </div>
          ) : (
            // 호스트 모드 (본인이 등록한 모임)
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
  );
}
