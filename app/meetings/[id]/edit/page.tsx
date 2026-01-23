export default function Edit() {
  return (
    <>
      <div className="meeting-edit-wrap">
        <form className="meetings-create">
          <div className="meetings-add">
            <h2>모임 수정</h2>
            <fieldset className="title-fieldset">
              <label htmlFor="meetings-title">모임 제목</label>
              <input type="text" id="meetings-title" name="meetings-title" />
            </fieldset>

            <fieldset className="category-fieldset">
              <label htmlFor="category">카테고리</label>
              <select name="category" id="category" required>
                <option value="" disabled selected>
                  선택
                </option>
                <option value="exercise">운동</option>
                <option value="social">사교</option>
                <option value="humanities">인문학 / 책 / 글</option>
                <option value="outdoor">아웃도어 / 여행</option>
                <option value="music">음악 / 악기</option>
                <option value="career">업종 / 직무</option>
                <option value="culture">문화 / 공연 / 축제</option>
                <option value="language">외국 / 언어</option>
                <option value="game">게임 / 오락</option>
                <option value="craft">공예 / 만들기</option>
                <option value="dance">댄스 / 무용</option>
                <option value="volunteer">봉사활동</option>
                <option value="photo">사진 / 영상</option>
                <option value="self_dev">자기계발</option>
                <option value="sports_watch">스포츠 관람</option>
                <option value="pet">반려동물</option>
                <option value="cooking">요리 / 제조</option>
                <option value="car_bike">자동차 / 바이크</option>
              </select>
            </fieldset>

            <fieldset className="context-fieldset">
              <label htmlFor="meetings-content">모임 설명</label>
              <input type="text" id="meetings-content" name="meetings-content" />
            </fieldset>

            <fieldset className="img-fieldset">
              <label htmlFor="meetings-img-label">모임 이미지</label>
              <label htmlFor="meetings-img" className="image-box">
                <div className="ractingle">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.2857 1.28571C10.2857 0.574554 9.71116 0 9 0C8.28884 0 7.71429 0.574554 7.71429 1.28571V7.71429H1.28571C0.574554 7.71429 0 8.28884 0 9C0 9.71116 0.574554 10.2857 1.28571 10.2857H7.71429V16.7143C7.71429 17.4254 8.28884 18 9 18C9.71116 18 10.2857 17.4254 10.2857 16.7143V10.2857H16.7143C17.4254 10.2857 18 9.71116 18 9C18 8.28884 17.4254 7.71429 16.7143 7.71429H10.2857V1.28571Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
              </label>
              <input type="file" id="meetings-img" name="meetings-img" accept="image/*" hidden />
            </fieldset>

            <fieldset className="tag-fieldset">
              <label htmlFor="tag">모임 태그</label>
              <input type="text" name="tag" id="tag" />
            </fieldset>

            <fieldset className="region-fieldset">
              <label htmlFor="region">지역</label>
              <button type="button">&plus; 추가</button>
            </fieldset>

            <fieldset className="gender-fieldset">
              <label htmlFor="gender">성별</label>
              <select required id="gender" name="gender">
                <option value="" disabled selected></option>
                <option value="m">남</option>
                <option value="f">여</option>
              </select>
            </fieldset>

            <fieldset className="age-fieldset">
              <label htmlFor="age">나이</label>
              <select required id="age" name="age">
                <option value="" disabled selected></option>
                <option value="teen">10대</option>
                <option value="twenties">20대</option>
                <option value="thirties">30대</option>
                <option value="forties_plus">40대 이상</option>
              </select>
            </fieldset>
            <fieldset className="count">
              <label htmlFor="count-input">
                인원
                <br />
                (0~300)명
              </label>
              <div className="counter-wrapper">
                <button type="button" className="count-btn descrase">
                  <svg width="18" height="3" viewBox="0 0 18 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.5C0 0.670312 0.574554 0 1.28571 0H16.7143C17.4254 0 18 0.670312 18 1.5C18 2.32969 17.4254 3 16.7143 3H1.28571C0.574554 3 0 2.32969 0 1.5Z" fill="#323577" />
                  </svg>
                </button>
                <input type="number" id="count-input" name="count-input" min="0" max="300" value="10" />
                <button type="button" className="count-btn increase">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.2857 1.28571C10.2857 0.574554 9.71116 0 9 0C8.28884 0 7.71429 0.574554 7.71429 1.28571V7.71429H1.28571C0.574554 7.71429 0 8.28884 0 9C0 9.71116 0.574554 10.2857 1.28571 10.2857H7.71429V16.7143C7.71429 17.4254 8.28884 18 9 18C9.71116 18 10.2857 17.4254 10.2857 16.7143V10.2857H16.7143C17.4254 10.2857 18 9.71116 18 9C18 8.28884 17.4254 7.71429 16.7143 7.71429H10.2857V1.28571Z"
                      fill="#323577"
                    />
                  </svg>
                </button>
              </div>
            </fieldset>
          </div>

          <div className="question">
            <h2>신청자 전용 질문 작성</h2>
            <fieldset className="question-1-field">
              <label htmlFor="question-1">1번 질문</label>
              <input type="text" name="question-1" id="question-1" placeholder="신청자에게 물어볼 질문을 작성하세요" />
            </fieldset>

            <fieldset className="question-2-field">
              <label htmlFor="question-2">2번 질문</label>
              <input type="text" name="question-2" id="question-2" placeholder="신청자에게 물어볼 질문을 작성하세요" />
            </fieldset>
          </div>
        </form>
        <button type="submit">수정</button>
        <button type="button">취소</button>
      </div>
    </>
  );
}
