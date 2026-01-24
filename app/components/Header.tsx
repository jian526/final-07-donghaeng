import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const isLogin = true;
  return (
    <header className={styles[`header-wrapper`]}>
      <div className={styles[`logo-wrapper`]}>
        <Link href="/">
          <Image src="./logo/logo.svg" width={79} height={69} alt="로고 이미지" />
        </Link>
      </div>
      <div className={styles[`meetings-wrapper`]}>
        <ul>
          <li>
            <Link href="/meetings">리스트</Link>
          </li>
          <li>
            <Link href="/bookmarks">북마크</Link>
          </li>
          <li>
            <Link href="/history">모임 조회</Link>
          </li>
        </ul>
      </div>
      {isLogin ? (
        <div className={styles[`user-info-wrapper`]}>
          <ul>
            <li>
              <button>로그아웃</button>
            </li>
            <li>
              <Link href="/notifications">
                <Image src="./icon/notification.svg" width={43} height={50} alt="알림 이미지" />
              </Link>
            </li>
            <li className={styles[`image-background`]}>
              <Link className={styles[`profile-image-wrapper`]} href="/mypage">
                <Image src="./icon/profile.svg" width={41} height={41} alt="사용자 디폴트 이미지" />
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles[`sign-wrapper`]}>
          <Link href="/login">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </div>
      )}
    </header>
  );
}
