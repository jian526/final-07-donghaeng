import profile from '@/public/icon/profile.svg';

export default function Modify() {
  return (
    <>
      <h1>수정 페이지</h1>
      <div>
        <img src={profile.src} alt="프로필이미지" />
        <button>취소</button>
        <button>완료</button>
        <div>
          <span>닉네임 </span>
          <textarea defaultValue="나폴리맛피자" style={{ backgroundColor: '#f0f0f0' }}></textarea>

          <span>소개 </span>
          <textarea defaultValue="나의 소개를 쓰는 공간" style={{ backgroundColor: '#f0f0f0' }}></textarea>
          <span>지역 </span>
          <select name="지역" id="">
            <option value="">서울특별시</option>
            <option value="">인천광역시</option>
            <option value="">대전광역시</option>
            <option value="">세종특별자치시</option>
            <option value="">광주광역시</option>
            <option value="">대구광역시</option>
            <option value="">울산광역시</option>
            <option value="">부산광역시</option>
            <option value="">경기도</option>
            <option value="">강원특별자치도</option>
            <option value="">충청북도</option>
            <option value="">충청남도</option>
            <option value="">전라남도</option>
            <option value="">전북특별자치도</option>
            <option value="">경상남도</option>
            <option value="">경상북도</option>
            <option value="">제주특별자치도</option>
          </select>

          <select name="구" id="">
            <option value="">종로구</option>
            <option value="">중구</option>
            <option value="">용산구</option>
            <option value="">성동구</option>
            <option value="">광진구</option>
            <option value="">동대문구</option>
            <option value="">중랑구</option>
            <option value="">성북구</option>
            <option value="">강북구</option>
            <option value="">도봉구</option>
            <option value="">노원구</option>
            <option value="">은평구</option>
            <option value="">서대문구</option>
            <option value="">마포구</option>
            <option value="">양천구</option>
            <option value="">강서구</option>
            <option value="">구로구</option>
            <option value="">금천구</option>
            <option value="">영등포구</option>
            <option value="">동작구</option>
            <option value="">관악구</option>
            <option value="">서초구</option>
            <option value="">강남구</option>
            <option value="">송파구</option>
            <option value="">강동구</option>
          </select>

          <span>나이 </span>
          <select name="나이" id="">
            <option value="">10대</option>
            <option value="">20대</option>
            <option value="">30대</option>
            <option value="">40대 이상</option>
          </select>

          <span>성별 </span>
          <select name="성별" id="">
            <option value="">남</option>
            <option value="">여</option>
          </select>
        </div>
      </div>
    </>
  );
}
