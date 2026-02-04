'use server';
import { ErrorRes, NotificationListRes } from '@/types/api';
import { updateTag } from 'next/cache';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export type ActionState = { ok: 0 | 1; message: string } | null;

/**
 * 알림 생성
 * @param {string} accessToken - 인증 토큰
 * @returns {Promise<NotificationListRes | ErrorRes>} - 알림 응답 객체
 */

export async function createNoti(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const accessToken = formData.get('accessToken');
  formData.delete('accessToken');

  // FormData를 객체로 변환
  const body = Object.fromEntries(formData.entries());

  let data: NotificationListRes | ErrorRes;

  try {
    const res = await fetch(`${API_URL}/notifications`, {
      method: 'POST',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        type: body.type || 'noti',
        target_id: Number(body.target_id),
        content: body.content,
        extra: {
          meetingId: body.meetingId,
          meetingTitle: body.meetingTitle,
          mainImages: body.mainImages,
        },
      }),
    });
    data = await res.json();
    if (data.ok) {
      // updateTag('seller/orders');
      return { ok: 1, message: '처리가 완료되었습니다.' };
    }
    return { ok: 0, message: (data as ErrorRes).message };
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 승인 처리에 실패했습니다.' };
  }
}
