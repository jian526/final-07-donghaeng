export default function Filter() {
  return (
    <>
      <h1>필터</h1>
      <div>
        <select name="카테고리" id="">
          <option value="">전체</option>
          <option value="">운동</option>
          <option value="">파티</option>
          <option value="">푸드.드링크</option>
          <option value="">자기계발</option>
          <option value="">N잡.재테크</option>
          <option value="">외국어</option>
          <option value="">취미</option>
          <option value="">소셜게임</option>
          <option value="">액티비티</option>
          <option value="">문화.예술</option>
          <option value="">여행.나들이</option>
          <option value="">동네.또래</option>
          <option value="">연애.사랑</option>
        </select>
        <select name="날짜" id=""></select>
        <select name="성별" id="">
          <option value="">남</option>
          <option value="">여</option>
        </select>
        <select name="나이대" id="">
          <option value="">10대</option>
          <option value="">20대</option>
          <option value="">30대</option>
          <option value="">40대 이상</option>
        </select>
        <select name="지역" id="">
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
        </select>
        <select name="인원" id=""></select>
      </div>
    </>
  );
}
