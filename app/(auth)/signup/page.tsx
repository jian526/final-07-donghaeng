'use client';

import BlankLayout from '@/app/components/BlankLayout';
import style from './signup.module.css';

export default function Signup() {
  return (
    <BlankLayout>
      <main className={style['signup-wrap']}>
        {/* <!-- 첫번째 페이지 --> */}
        <form>
          <section className={`${style['signup-step']} ${style['active']}`}>
            <button type="button" className={style['back-btn']} aria-label="이전페이지" onClick={() => history.back()}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.439367 8.09227C-0.146456 8.59433 -0.146456 9.40968 0.439367 9.91175L9.43761 17.6235C10.0234 18.1255 10.9748 18.1255 11.5606 17.6235C12.1465 17.1214 12.1465 16.306 11.5606 15.804L3.62156 9L11.5559 2.19603C12.1418 1.69396 12.1418 0.878612 11.5559 0.376548C10.9701 -0.125516 10.0187 -0.125516 9.43292 0.376548L0.43468 8.08825L0.439367 8.09227Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className={style['logo-img']}></div>
            <fieldset className={style['email-fieldset']}>
              <div>
                <label className={style['label']} htmlFor="email">
                  이메일
                </label>
                <input className={style['input']} type="email" id="email" placeholder="이메일을 입력해 주세요" />
              </div>
              <button type="button" className={style['check-btn']}>
                중복확인
              </button>
              <span className={`${style['field-message']} ${style['field-email']}`}>이미 존재하는 아이디 입니다</span>
            </fieldset>

            <fieldset className={style['password-fieldset']}>
              <label className={style['label']} htmlFor="password">
                비밀번호
              </label>
              <input className={style['input']} type="password" id="password" placeholder="비밀번호를 입력해 주세요" />
              <span className={`${style['field-message']} ${style['field-password']}`}>비밀번호는 8자로 대소문자, 특수문자로 되어야합니다.</span>
            </fieldset>

            <fieldset className={style['password-fieldset']}>
              <label className={style['label']} htmlFor="password-check">
                비밀번호 확인
              </label>
              <input className={style['input']} type="password" id="password-check" placeholder="" />
              <span className={`${style['field-message']} ${style['field-password']}`}>비밀번호를 한번 더 입력해 주세요.</span>
            </fieldset>

            <button type="button" className={style['btn']}>
              다음으로
            </button>
          </section>

          {/* <!-- ==================================================================================== --> */}
          {/* <!-- 두번째 페이지 --> */}
          {/* <!-- #TODO유효성 검사 통과하면 두번째 페이지로 이동하도록 해야함 --> */}

          <section className={style['signup-step']}>
            <button type="button" className={style['back-btn']} aria-label="이전페이지">
              {/* <!-- #TODO 이전 버튼 눌렀을때 이전화면(로그인창)이 아니라 이전 스텝이 보이도록 해야함 --> */}
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.439367 8.09227C-0.146456 8.59433 -0.146456 9.40968 0.439367 9.91175L9.43761 17.6235C10.0234 18.1255 10.9748 18.1255 11.5606 17.6235C12.1465 17.1214 12.1465 16.306 11.5606 15.804L3.62156 9L11.5559 2.19603C12.1418 1.69396 12.1418 0.878612 11.5559 0.376548C10.9701 -0.125516 10.0187 -0.125516 9.43292 0.376548L0.43468 8.08825L0.439367 8.09227Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className={style['logo-img']}></div>

            <fieldset className={style['nickname-fieldset']}>
              <div>
                <label className={style['label']} htmlFor="nickname">
                  닉네임
                </label>
                <input className={style['input']} type="text" id="nickname" placeholder="닉네임을 입력해 주세요" />
              </div>
              <button type="button" className={style['check-btn']}>
                중복확인
              </button>
              <span className={`${style['field-message']} ${style['field-nickname']}`}>닉네임은 최소 2글자 ~ 최대 6글자 사이로 입력해주세요.</span>
              <span className={`${style['field-message']} ${style['field-nickname']} ${style['check-nickname']}`}>이미 존재하는 닉네임 입니다</span>
            </fieldset>

            <fieldset className={style['region-fieldset']}>
              <div className={style['field-div']}>
                <label className={style['label']} htmlFor="region">
                  지역
                </label>
                <br />
                <select className={style['select']} required name="region" id="region">
                  <option value="" disabled>
                    지역을 선택해 주세요
                  </option>
                  <option value="seoul">서울특별시</option>
                  <option value="busan">부산광역시</option>
                  <option value="daegu">대구광역시</option>
                  <option value="incheon">인천광역시</option>
                  <option value="gwangju">광주광역시</option>
                  <option value="daejeon">대전광역시</option>
                  <option value="ulsan">울산광역시</option>
                  <option value="sejong">세종특별자치시</option>
                  <option value="gyeonggi">경기도</option>
                  <option value="gangwon">강원특별자치도</option>
                  <option value="chungbuk">충청북도</option>
                  <option value="chungnam">충청남도</option>
                  <option value="jeonbuk">전라북도</option>
                  <option value="jeonnam">전라남도</option>
                  <option value="gyeongbuk">경상북도</option>
                  <option value="gyeongnam">경상남도</option>
                  <option value="jeju">제주특별자치도</option>
                </select>
              </div>
              <svg className={style['svg-1']} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
                  fill="black"
                />
              </svg>
            </fieldset>
            <div className={style['fieldset-wrap']}>
              <fieldset className={style['age-fieldset']}>
                <div className={style['field-div']}>
                  <label className={style['label']} htmlFor="age">
                    나이
                  </label>
                  <div>
                    <select className={style['select']} required id="age" name="age">
                      <option value="" disabled defaultValue=""></option>
                      <option value="teen">10대</option>
                      <option value="twenties">20대</option>
                      <option value="thirties">30대</option>
                      <option value="forties_plus">40대 이상</option>
                    </select>
                  </div>
                  <svg className={style['svg-2']} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </fieldset>

              <fieldset className={style['gender-fieldset']}>
                <div className={style['field-div']}>
                  <label className={style['label']} htmlFor="gender">
                    성별
                  </label>
                  <select className={style['select']} required id="gender" name="gender">
                    <option value="" disabled selected>
                      성별을 선택해주세요
                    </option>
                    <option value="m">남</option>
                    <option value="f">여</option>
                  </select>
                </div>
                <svg className={style['svg-3']} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.09227 11.5606C8.59433 12.1465 9.40968 12.1465 9.91175 11.5606L17.6235 2.56239C18.1255 1.97657 18.1255 1.02519 17.6235 0.439367C17.1214 -0.146456 16.306 -0.146456 15.804 0.439367L9 8.37844L2.19603 0.444053C1.69396 -0.14177 0.878612 -0.14177 0.376548 0.444053C-0.125516 1.02988 -0.125516 1.98125 0.376548 2.56708L8.08825 11.5653L8.09227 11.5606Z"
                    fill="black"
                  />
                </svg>
              </fieldset>
            </div>

            <button type="submit" className={style['btn']}>
              회원가입
            </button>
          </section>
        </form>
      </main>
    </BlankLayout>
  );
}
