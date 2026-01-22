import profile from '@/public/icon/profile.svg';
import heart from '@/public/icon/heart.svg';

export default function Mypage() {
  return (
    <>
      <h1>마이 페이지</h1>
      <div>
        <img src={profile.src} alt="프로필이미지" />
        <div>
          <p>나폴리맛피자</p>
          <p>example@naver.com</p>
          <p>남자.20대.서울특별시</p>
        </div>
        <figure>
          <img src={heart.src} alt="심박수" width="" height="" />
          <figcaption>70bpm</figcaption>
        </figure>
        <p>나의 소개를 쓰는 공간</p>
        <div>
          <p>
            관심 모임
            <span>10</span>
          </p>
        </div>
        <div>
          <p>
            참여 완료
            <span>365</span>
          </p>
        </div>
        <button>북마크</button>
        <button>내가 참여한 모임</button>
      </div>
    </>
  );
}
