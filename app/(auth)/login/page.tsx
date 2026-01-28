'use client';

import BlankLayout from '@/app/components/BlankLayout';
import styles from './Login.module.css';
import Link from 'next/link';

export default function Login() {
  return (
    <BlankLayout>
      <div className={styles['login-wrap']}>
        <button type="button" className={styles['back-btn']} aria-label="이전페이지">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.439367 8.09227C-0.146456 8.59433 -0.146456 9.40968 0.439367 9.91175L9.43761 17.6235C10.0234 18.1255 10.9748 18.1255 11.5606 17.6235C12.1465 17.1214 12.1465 16.306 11.5606 15.804L3.62156 9L11.5559 2.19603C12.1418 1.69396 12.1418 0.878612 11.5559 0.376548C10.9701 -0.125516 10.0187 -0.125516 9.43292 0.376548L0.43468 8.08825L0.439367 8.09227Z"
              fill="black"
            />
          </svg>
        </button>
        <div className={styles['logo-img']}></div>
        <form className={styles['form']}>
          <fieldset className={styles['email-fieldset fieldset']}>
            <label htmlFor="email" className={styles['label']}>
              이메일
            </label>
            <br />
            <input className={styles['input']} type="email" id="email" placeholder="이메일을 입력해 주세요" />
          </fieldset>

          <fieldset className={styles['password-fieldset fieldset']}>
            <label htmlFor="password" className={styles['label']}>
              비밀번호
            </label>
            <br />
            <input className={styles['input']} type="password" id="password" placeholder="비밀번호를 입력해 주세요" />

            <span className={styles['field-message']}>비밀번호를 다시 입력해 주세요</span>
          </fieldset>

          <button type="submit" className={styles['btn']}>
            <Link href="/">로그인</Link>
            {/* #TODO 디자인을 위한 a태그 - 기능 구현시 a태그 삭제예정! */}
          </button>
          <br />
          <a href="/signup" className={styles['a']}>
            회원가입
          </a>
          <br />
          <a href="/signup" className={styles['login-help']}>
            비밀번호를 잊으셨나요?
          </a>
        </form>
      </div>
    </BlankLayout>
  );
}
