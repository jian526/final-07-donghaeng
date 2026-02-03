'use client';

import useUserStore from '@/zustand/userStore';
import styles from './Apply.module.css';
import { Meetings } from '@/types/meetings';
import { createApply } from '@/actions/meetings';

interface ApplyFormProps {
  meeting: Meetings;
  id: string;
}

export default function ApplyForm({ meeting, id }: ApplyFormProps) {
  // 유저 정보 가져오기
  const user = useUserStore((state) => state.user);
  const userId = user?._id;
  const accessToken = user?.token?.accessToken;
  console.log('유저아이디', userId);

  const processAction = async (id: string, answer1: string, answer2: string) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('accessToken', accessToken || '');
    formData.append(
      'products',
      JSON.stringify([
        {
          _id: Number(id),
          quantity: 0,
        },
      ])
    );
    formData.append(
      'extra',
      JSON.stringify({
        answer1,
        answer2,
      })
    );

    await createApply(null, formData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 제출 시 페이지가 리로드됨을 방지
    const form = e.currentTarget;
    const answer1 = (form.elements.namedItem('answer1') as HTMLTextAreaElement).value;
    const answer2 = (form.elements.namedItem('answer2') as HTMLTextAreaElement).value;
    processAction(id, answer1, answer2);
  };

  return (
    <form className={styles['apply-body']} onSubmit={handleSubmit}>
      <h1 className={styles['apply-title']}>모임 신청</h1>
      <div className={styles['question-div']}>
        <h3>{meeting.extra.survey1}</h3>
        <textarea name="answer1" required></textarea>
      </div>
      <div className={styles['question-div']}>
        <h3>{meeting.extra.survey2}</h3>
        <textarea name="answer2" required></textarea>
      </div>
      <div className={styles['btn-div']}>
        <button type="submit" className={styles['btn-apply']}>
          신청하기
        </button>
        <button type="button" className={styles['btn-cancel']}>
          취소하기
        </button>
      </div>
    </form>
  );
}
