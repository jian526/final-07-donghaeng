'use client';

import profile from '@/public/icon/profile.svg';
import camera from '@/public/icon/camera.svg';
import down from '@/public/icon/down.svg';
import styles from './Modify.module.css';
import Link from 'next/link';
import Image from 'next/image';
import DefaultLayout from '@/app/components/DefaultLayout';
import { use, useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useUserStore from '@/zustand/userStore';
import { updateUser } from '@/actions/user';

export default function Modify() {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const [state, formAction, isPending] = useActionState(updateUser, null);

  // useEffect를 사용해서 zustand 갱신
  // redirect는 갱신이 되지 않고 페이지를 이동한다.
  useEffect(() => {
    console.log('state:', state);
    console.log('user token:', user?.token);
    // state가 존재하고 성공 응답일 때만 실행
    if (state && state.ok === 1) {
      // 서버가 돌려준 갱신된 유저 정보(state.item)로 zustand 스토어를 업데이트.
      setUser({ ...state.item, token: user?.token, _id: user!._id });
      router.push('/mypage'); // 마이페이지로 이동
    }
  }, [state]);

  return (
    <>
      <DefaultLayout>
        <form action={formAction}>
          {/* 서버에 보내기 위한 토큰과 id 값 */}
          <input type="hidden" name="accessToken" value={user?.token?.accessToken || ''} />
          <input type="hidden" name="_id" value={user?._id || ''} />
          <input type="hidden" name="email" value={user?.email || ''} />
          <main className={styles['modify-div']}>
            <div className={styles['profile-top']}>
              <div className={styles['img-wrapper']}>
                <Image src={profile.src} alt="프로필이미지" width={165} height={165} className={styles['profile-img']} />
                <button type="button" className={styles['btn-camera']}>
                  <Image src={camera.src} width={29} height={27} alt="카메라이미지" />
                </button>
              </div>

              <div className={styles['btn-div']}>
                <Link href="/mypage">
                  <button type="button" className={styles['btn-cancel']}>
                    취소
                  </button>
                </Link>
                <button type="submit" className={styles['btn-complete']}>
                  완료
                </button>
              </div>
            </div>
            <div>
              <div className={styles['nickname-div']}>
                <span>닉네임</span>
                <input name="name" defaultValue={user?.name || '닉네임'}></input>
              </div>

              <div className={styles['introduce-div']}>
                <span>소개</span>
                <textarea name="comment" defaultValue={user?.comment || '나의 소개를 쓰는 공간'}></textarea>
              </div>
              <div className={styles['address-div']}>
                <div>
                  <span>시 </span>
                  <select name="region" defaultValue={user?.region || '서울특별시'} className={styles['city']}>
                    <option value="서울특별시">서울특별시</option>
                    <option value="인천광역시">인천광역시</option>
                    <option value="대전광역시">대전광역시</option>
                    <option value="세종특별자치시">세종특별자치시</option>
                    <option value="광주광역시">광주광역시</option>
                    <option value="대구광역시">대구광역시</option>
                    <option value="울산광역시">울산광역시</option>
                    <option value="부산광역시">부산광역시</option>
                    <option value="경기도">경기도</option>
                    <option value="강원특별자치도">강원특별자치도</option>
                    <option value="충청북도">충청북도</option>
                    <option value="충청남도">충청남도</option>
                    <option value="전라남도">전라남도</option>
                    <option value="전북특별자치도">전북특별자치도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="경상북도">경상북도</option>
                    <option value="제주특별자치도">제주특별자치도</option>
                  </select>
                  <img src={down.src} alt="화살표" />
                </div>

                <div>
                  <span>구 </span>
                  <select name="구" defaultValue={''} className={styles['district']}>
                    <option value="종로구">종로구</option>
                    <option value="중구">중구</option>
                    <option value="용산구">용산구</option>
                    <option value="성동구">성동구</option>
                    <option value="광진구">광진구</option>
                    <option value="동대문구">동대문구</option>
                    <option value="중랑구">중랑구</option>
                    <option value="성북구">성북구</option>
                    <option value="강북구">강북구</option>
                    <option value="도봉구">도봉구</option>
                    <option value="노원구">노원구</option>
                    <option value="은평구">은평구</option>
                    <option value="서대문구">서대문구</option>
                    <option value="마포구">마포구</option>
                    <option value="양천구">양천구</option>
                    <option value="강서구">강서구</option>
                    <option value="구로구">구로구</option>
                    <option value="금천구">금천구</option>
                    <option value="영등포구">영등포구</option>
                    <option value="동작구">동작구</option>
                    <option value="관악구">관악구</option>
                    <option value="서초구">서초구</option>
                    <option value="강남구">강남구</option>
                    <option value="송파구">송파구</option>
                    <option value="강동구">강동구</option>
                  </select>
                  <img src={down.src} alt="화살표" />
                </div>
              </div>

              <div className={styles['etc-div']}>
                <div>
                  <span>나이</span>
                  <select name="age" defaultValue={user?.age || ''}>
                    <option value="10">10대</option>
                    <option value="20">20대</option>
                    <option value="30">30대</option>
                    <option value="40">40대 이상</option>
                  </select>
                  <img src={down.src} alt="화살표" />
                </div>

                <div>
                  <span>성별</span>
                  <select name="gender" defaultValue={user?.gender || '성별'}>
                    <option value="남">남</option>
                    <option value="여">여</option>
                  </select>
                  <img src={down.src} alt="화살표" />
                </div>
              </div>
            </div>
          </main>
        </form>
      </DefaultLayout>
    </>
  );
}
