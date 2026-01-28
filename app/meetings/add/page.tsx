'use client';

import Link from 'next/link';
import style from './create.module.css';
import DefaultLayout from '@/app/components/DefaultLayout';

export default function Add() {
  return (
    <DefaultLayout>
      <div className={style['wrap']}>
        <div className={style['add-wrap']}>
          <form className={style['meetings-create']}>
            <div className={style['meetings-add']}>
              <h2>모임 등록</h2>
              <fieldset className={style['title-fieldset']}>
                <label htmlFor="meetings-title">모임 제목</label>
                <input className={style['title-input']} type="text" id="meetings-title" name="meetings-title" />
              </fieldset>

              <fieldset className={style['category-fieldset']}>
                <label htmlFor="category">카테고리</label>

                <div className={style['category-div']}>
                  <select className={style['category-select']} name="category" id="category" required defaultValue="">
                    <option value="" disabled>
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
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </fieldset>

              <fieldset className={style['context-fieldset']}>
                <label htmlFor="meetings-content">모임 설명</label>

                <textarea className={style['content-input']} id="meetings-content" name="meetings-content" />
              </fieldset>

              <fieldset className={style['img-fieldset']}>
                <label htmlFor="meetings-img-label">모임 이미지</label>
                <label htmlFor="meetings-img" className="image-box">
                  <div className={style['ractingle-wrap']}>
                    <div className={style['ractingle']}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.2857 1.28571C10.2857 0.574554 9.71116 0 9 0C8.28884 0 7.71429 0.574554 7.71429 1.28571V7.71429H1.28571C0.574554 7.71429 0 8.28884 0 9C0 9.71116 0.574554 10.2857 1.28571 10.2857H7.71429V16.7143C7.71429 17.4254 8.28884 18 9 18C9.71116 18 10.2857 17.4254 10.2857 16.7143V10.2857H16.7143C17.4254 10.2857 18 9.71116 18 9C18 8.28884 17.4254 7.71429 16.7143 7.71429H10.2857V1.28571Z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
                <input type="file" id="meetings-img" name="meetings-img" accept="image/*" hidden />
              </fieldset>

              <fieldset className={style['tag-fieldset']}>
                <label htmlFor="tag">모임 태그</label>
                <br />
                <input className={style['tag-input']} type="text" name="tag" id="tag" />
              </fieldset>

              <div className={style['field-parent-wrap']}>
                <fieldset className={style['region-fieldset']}>
                  <label htmlFor="region" className={style['region-label']}>
                    지역
                  </label>
                  <button type="button" className={`${style['select-btn']} ${style['btn']}`}>
                    {' '}
                    {'\u002B'} 추가
                  </button>
                </fieldset>

                <fieldset className={style['gender-fieldset']}>
                  <label htmlFor="gender">성별</label>
                  <div>
                    <select className={style['select-btn']} required id="gender" name="gender">
                      <option value="" disabled defaultValue=""></option>
                      <option value="m">남</option>
                      <option value="f">여</option>
                    </select>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </fieldset>

                <fieldset className={style['age-fieldset']}>
                  <label htmlFor="age">나이</label>
                  <div>
                    <select required id="age" name="age" className={style['select-btn']}>
                      <option value="" disabled defaultValue=""></option>
                      <option value="teen">10대</option>
                      <option value="twenties">20대</option>
                      <option value="thirties">30대</option>
                      <option value="forties_plus">40대 이상</option>
                    </select>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </fieldset>
              </div>

              <fieldset className={style['count']}>
                <label htmlFor="count-input">
                  인원
                  <br />
                  (0~300)명
                </label>
                <div className={style['counter-wrapper']}>
                  <button type="button" className={style['count-btn, descrase']}>
                    <svg width="18" height="3" viewBox="0 0 18 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.5C0 0.670312 0.574554 0 1.28571 0H16.7143C17.4254 0 18 0.670312 18 1.5C18 2.32969 17.4254 3 16.7143 3H1.28571C0.574554 3 0 2.32969 0 1.5Z" fill="#323577" />
                    </svg>
                  </button>
                  <input type="number" id="count-input" name="count-input" min="0" max="300" defaultValue={10} />
                  <button type="button" className={style['count-btn, increase']}>
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

            <div>
              <h2>신청자 전용 질문 작성</h2>
              <div className={style['question']}>
                <fieldset className={style['question-1-field']}>
                  <label htmlFor="question-1">1번 질문</label>
                  <input type="text" name="question-1" id="question-1" placeholder="신청자에게 물어볼 질문을 작성하세요" />
                </fieldset>

                <fieldset className={style['question-2-field']}>
                  <label htmlFor="question-2">2번 질문</label>
                  <input type="text" name="question-2" id="question-2" placeholder="신청자에게 물어볼 질문을 작성하세요" />
                </fieldset>
              </div>
            </div>
          </form>
          <br />
          <div className={style['btn-wrap']}>
            {/* #TODO link 기능구현시 삭제예정*/}
            <button className={style['btn']} type="submit">
              <Link href="/meetings">등록</Link>
            </button>
            <button className={style['btn-2']} type="button">
              <Link href={'/meetings'}>취소</Link>
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
