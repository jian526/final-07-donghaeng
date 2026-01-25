import profile from '@/public/icon/profile.svg';
import heart from '@/public/icon/heart.svg';

export default function Manage() {
  return (
    <>
      <h1>신청자 목록</h1>
      <div>
        <img src={profile.src} alt="프로필이미지" />
        <div>
          <span>나폴리맛피자</span>
          <figure>
            <img src={heart.src} alt="심박수이미지" />
            <figcaption>90bpm</figcaption>
          </figure>
          <button>승인</button>
          <button>거절</button>
        </div>
        <div>
          <h3>질문1</h3>
          <p>질문에 대한 답변을 가져오는 위치</p>
        </div>
        <div>
          <h3>질문2</h3>
          <p>질문에 대한 답변을 가져오는 위치</p>
        </div>
      </div>
    </>
  );
}
