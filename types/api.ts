import { Meetings } from '@/types/meetings';

// 게시물 목록 조회 결과 타입
export interface MeetingsListRes {
  ok: 1;
  item: Meetings[];
}

// 게시물 상세 조회 결과 타입
export interface MeetingsInfoRes {
  ok: 1;
  item: Meetings;
}
import { User } from '@/types/user';

// 회원 정보 타입
export interface UserInfoRes {
  ok: 1;
  item: User;
}

// 서버 검증 에러 타입
export interface ServerValidationError {
  type: string;
  value: string;
  msg: string;
  location: string;
}

// 에러 타입
export interface ErrorRes {
  ok: 0;
  message: string;
  errors?: {
    [fieldName: string]: ServerValidationError;
  };
}
