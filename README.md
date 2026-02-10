# 취미공유 앱 (Hobby Sharing App)

Next.js App Router 기반의 취미 공유 커뮤니티 플랫폼입니다.

## 📋 프로젝트 개요

사용자들이 자신의 취미를 공유하고 소통할 수 있는 게시판 형태의 웹 애플리케이션입니다.

## 👥 팀 멤버

- 유현욱
- 채민기
- 김지안
- 김현주

## 🛠 기술 스택

### Frontend

- **Framework**: React + Next.js (App Router)
- **Styling**: CSS
- **State Management**: Zustand (sessionStorage persist)
- **Data Fetching**: Fetch API + Next.js Server Actions

### Key Features

- 서버/클라이언트 컴포넌트 혼합 구성
- 캐시 태그 기반 데이터 갱신 (`revalidateTag`, `revalidatePath`)
- sessionStorage 기반 인증 상태 관리

## 📁 주요 기능

- **사용자 인증**: 로그인/회원가입
- **게시판**: 게시글 목록 조회, 상세 보기
- **게시글 관리**: 작성, 수정, 삭제
- **댓글 시스템**: 댓글 작성 및 관리
- **권한 관리**: 작성자 기반 수정/삭제 권한

## 🔧 환경 설정

### 환경 변수

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```bash
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_CLIENT_ID=your_client_id
```

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 🏗 시스템 아키텍처

### 데이터 흐름

1. **조회**: 서버 컴포넌트에서 게시글/댓글 데이터 fetch
2. **생성/수정/삭제**: Server Action으로 API 호출
3. **캐시 갱신**: 성공 시 자동으로 캐시 업데이트
4. **인증**: 로그인 성공 시 Zustand store에 사용자 정보 저장

### API 통신

- 모든 요청에 `Client-Id` 헤더 포함
- 인증이 필요한 요청은 `Authorization: Bearer <token>` 헤더 사용
- 서버 측에서 권한 검증 수행

## 🔐 보안

- 인증 필요 기능은 로그인 사용자만 접근 가능
- 게시글/댓글 수정/삭제는 작성자 본인만 가능
- 토큰은 sessionStorage에 저장 (브라우저 종료 시 자동 삭제)

## 📄 참고 문서

프로젝트 관련 상세 문서는 다음을 참고하세요:

- 요구사항정의서.md
- 기능정의서.md
- 화면정의서.md
- 시스템설계서.md

---

**개발 환경**: Node.js 18+ 권장
