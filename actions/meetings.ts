import { ErrorRes, MeetingsInfoRes } from '@/types/api';
import { redirect } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type ActionState = ErrorRes | null;

/**
 * 모임 지원
 * @param {ActionState} prevState - 이전 상태(사용하지 않음)
 * @param {FormData} formData - 모임 지원 정보를 담은 FormData 객체
 * @returns {Promise<ActionState>} - 생성 결과 응답 객체
 * @throws {Error} - 네트워크 오류 발생 시
 * @description
 * 모임을 지원하고, 성공 시 모임 목록으로 리다이렉트
 * 실패 시 에러 메시지를 반환
 */
export async function createApply(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const accessToken = formData.get('accessToken');
  formData.delete('accessToken');

  // FormData를 일반 Object로 변환
  const body = Object.fromEntries(formData.entries());

  let res: Response;
  let data: MeetingsInfoRes | ErrorRes;

  try {
    res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    data = await res.json();
    console.log(data);
    console.log(accessToken);
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }

  // redirect()는 예외를 throw 해서 처리하는 방식이라서 try 문에서 사용하면 catch로 처리되므로 제대로 동작하지 않음
  // 따라서 try 문 밖에서 사용해야 함
  if (data.ok) {
    redirect(`/meetings`); // 모임 목록 페이지로 리다이렉트
  } else {
    return data; // 에러 응답 객체 반환
  }
}

/**
 * 모임 등록
 * @param {ActionState} prevState - 이전 상태(사용하지 않음)
 * @param {FormData} formData - 모임 등록 정보를 담은 FormData 객체
 * @returns {Promise<ActionState>} - 생성 결과 응답 객체
 * @throws {Error} - 네트워크 오류 발생 시
 * @description
 * 새로운 모임을 등록하고, 성공 시 모임 목록으로 리다이렉트
 * 실패 시 에러 메시지를 반환
 */
export async function createMeeting(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const accessToken = formData.get('accessToken');
  formData.delete('accessToken');

  // FormData를 일반 Object로 변환
  const body = Object.fromEntries(formData.entries());

  let res: Response;
  let data: MeetingsInfoRes | ErrorRes;

  try {
    res = await fetch(`${API_URL}/seller/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    data = await res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 모임 등록에 실패했습니다.' };
  }

  if (data.ok) {
    redirect(`/meetings`); // 모임 목록 페이지로 리다이렉트
  } else {
    return data; // 에러 응답 객체 반환
  }
}

/**
 * 모임 수정
 * @param {ActionState} prevState - 이전 상태(사용하지 않음)
 * @param {FormData} formData - 모임 수정 정보를 담은 FormData 객체
 * @returns {Promise<ActionState>} - 수정 결과 응답 객체
 * @throws {Error} - 네트워크 오류 발생 시
 * @description
 * 기존 모임을 수정하고, 성공 시 모임 목록으로 리다이렉트
 * 실패 시 에러 메시지를 반환
 */
export async function updateMeeting(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const accessToken = formData.get('accessToken');
  const _id = formData.get('_id');
  formData.delete('accessToken');
  formData.delete('_id');

  // FormData를 일반 Object로 변환
  const body = Object.fromEntries(formData.entries());

  let res: Response;
  let data: MeetingsInfoRes | ErrorRes;

  try {
    res = await fetch(`${API_URL}/seller/products/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    data = await res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 모임 수정에 실패했습니다.' };
  }

  if (data.ok) {
    redirect(`/meetings`); // 모임 목록 페이지로 리다이렉트
  } else {
    return data; // 에러 응답 객체 반환
  }
}

/**
 * 모임 삭제
 * @param {ActionState} prevState - 이전 상태(사용하지 않음)
 * @param {FormData} formData - 모임 삭제 정보를 담은 FormData 객체
 * @returns {Promise<ActionState>} - 삭제 결과 응답 객체
 * @throws {Error} - 네트워크 오류 발생 시
 * @description
 * 모임을 삭제하고, 성공 시 모임 목록으로 리다이렉트
 * 실패 시 에러 메시지를 반환
 */
export async function deleteMeeting(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const accessToken = formData.get('accessToken');
  const _id = formData.get('_id');

  let res: Response;
  let data: MeetingsInfoRes | ErrorRes;

  try {
    res = await fetch(`${API_URL}/seller/products/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    data = await res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 모임 삭제에 실패했습니다.' };
  }

  if (data.ok) {
    redirect(`/meetings`); // 모임 목록 페이지로 리다이렉트
  } else {
    return data; // 에러 응답 객체 반환
  }
}
