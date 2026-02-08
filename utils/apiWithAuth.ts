// utils/apiWithAuth.ts
import useUserStore from '@/zustand/userStore';

interface FetchOptions extends RequestInit {
  requireAuth?: boolean;
}

export async function fetchWithAuth(url: string, options: FetchOptions = {}) {
  const { user, refreshAccessToken, resetUser } = useUserStore.getState();

  const accessToken = user?.token?.accessToken;

  if (!accessToken && options.requireAuth) {
    throw new Error('로그인이 필요합니다');
  }

  // 헤더에 토큰 추가
  const headers = {
    ...options.headers,
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  };

  let response = await fetch(url, {
    ...options,
    headers,
  });

  // 401 에러 발생 시 토큰 갱신 후 재시도
  if (response.status === 401 && options.requireAuth) {
    console.log('401 에러 발생, 토큰 갱신 시도...');

    const refreshSuccess = await refreshAccessToken();

    if (refreshSuccess) {
      // 갱신된 토큰으로 재시도
      const newAccessToken = useUserStore.getState().user?.token?.accessToken;

      response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${newAccessToken}`,
        },
      });

      console.log('토큰 갱신 후 재시도 완료');
    } else {
      // 갱신 실패 시 로그아웃
      console.log('토큰 갱신 실패, 로그인 페이지로 이동');
      resetUser();

      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }

      throw new Error('인증이 만료되었습니다. 다시 로그인해주세요.');
    }
  }

  return response;
}
