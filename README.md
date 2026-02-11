## 📎 목차

1. [프로젝트 개요](#-프로젝트-개요)
2. [주요 기능](#-주요-기능)
3. [프로젝트 팀 소개](#-프로젝트-팀-소개)
4. [기술 스택](#-기술-스택)
5. [화면 구성](#-화면-구성)
6. [워크 플로우](#-워크-플로우)
7. [트러블 슈팅](#-트러블-슈팅)
8. [추가하고 싶은 페이지 및 기능](#-추가하고-싶은-페이지-및-기능)
9. [회고](#-회고)
10. [스크럼/회의록](#-스크럼/회의록)

## Moa (모아) - 취미 공유 플랫폼

지도 기반 모임탐색과 AI맞춤 모의 추천을 통한 취미 공유 커뮤니티 플랫폼입니다.

![banner-image](docs/images/배너.png)

## 📋 프로젝트 개요

취미 중심 사용자 연결을 통한 간편한 모임 참여 플랫폼입니다.
지도 기반 모임 탐색, AI 맞춤 모임 추천, 1:1 채팅 기능을 제공하여
부담 없이 새로운 경험을 시작할 수 있도록 돕습니다.

## 🌐 배포 주소

- [배포 URL](https://final-07-moa-release.vercel.app/)

## 📌 주요 기능

### 취미 중심 사용자 기반 모임 플랫폼:

- 사용자 계정 인증을 통한 서비스 접근 제공
- 검색 기능 지원
- 채팅 기능 지원
- AI 성향 기반 모임 추천
- 카테고리별, 최신순으로 정렬
- 필터 선택시 즉시 결과 반영

### 지도 기반 모임 사이트:

- 마커 클릭시 커스텀 오버레이 호출
- 바로가기 클릭시 모임 상세로 이동

### 마이페이지로 사용자 관리 편리성:

- 모임 관리하기
- 북마크 버튼 클릭시 북마크 추가/삭제 가능
- 모임 조회(참여전, 참여후)

## 📅 개발 기간

2026.1.14 ~ 2026.02.13

## 👥 프로젝트 팀 소개

| 프로필                                                    | 이름   | 역할       | 담당 페이지                                                                                                             | GitHub                                  |
| --------------------------------------------------------- | ------ | ---------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| <img src="https://github.com/minggichae.png" width="100"> | 채민기 | 팀원, PM   | - 마이페이지, 수정페이지<br/> - 지도 페이지<br/> - 알림 페이지<br/> - 필터 컴포넌트                                     | [GitHub](https://github.com/minggichae) |
| <img src="https://github.com/holyhw.png" width="100">     | 유현욱 | 팀원, PL   | - 헤더, 푸터 컴포넌트<br/> - 메인페이지, AI 추천<br/> - 참여자 관리, 모임신청<br/> - 채팅 페이지<br/> - 북마크 컴포넌트 | [GitHub](https://github.com/holyhw)     |
| <img src="https://github.com/kkhhjjoo.png" width="100">   | 김현주 | 팀원, 서기 | - 모임리스트 페이지<br/> - 모임 상세 페이지                                                                             | [GitHub](https://github.com/kkhhjjoo)   |
| <img src="https://github.com/jian526.png" width="100">    | 김지안 | 팀원, 발표 | - 로그인, 회원가입 페이지<br/> - 모임 등록 페이지<br/> - 모임 수정 페이지<br/> - 모임 조회 페이지                       | [GitHub](https://github.com/jian526)    |

## ⚙️기술 스택

| 분류             | 기술                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **프론트엔드**   | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)                                                                                 |
| **상태 관리**    | ![Zustand](https://img.shields.io/badge/Zustand-000000?style=flat-square) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)                                                                                                                                                                                                                                |
| **백엔드/DB**    | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)                                                                                                                                                                                                                                                                                                    |
| **API**          | ![Kakao](https://img.shields.io/badge/Kakao_Map_API-FFCD00?style=flat-square&logo=kakao&logoColor=black) ![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=flat-square&logo=openai&logoColor=white)                                                                                                                                                                                          |
| **UI/UX**        | ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)                                                                                                                                                                                                                                                                                                          |
| **개발 환경**    | ![VS Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)                                                                                                                                                                                                                                                                                |
| **커뮤니케이션** | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white) |
| **배포**         | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)                                                                                                                                                                                                                                                                                                       |

## 🛠 개발 환경

| 구분     | 종류                                |
| -------- | ----------------------------------- |
| FrontEnd | React, Next.js, CSS Module, Zustand |
| BackEnd  | MongoDB, Kakao Map API, OpenAI API  |

## 📚 라이브러리 사용 이유

| 기술 스택   | 도입 이유                                                                 |
| ----------- | ------------------------------------------------------------------------- |
| React       | 컴포넌트 기반 아키텍처를 통한 UI 재사용성 및 개발 생산성 향상             |
| Next.js     | 서버 사이드 렌더링(SSR)과 파일 기반 라우팅을 통한 성능 최적화 및 SEO 개선 |
| Zustand     | 간결한 API와 보일러플레이트 최소화를 통한 효율적인 전역 상태 관리         |
| CSS Modules | 스코프 격리를 통한 스타일 충돌 방지 및 컴포넌트 단위 스타일 관리          |

## 🖥️ 화면 구성

### 🔐 로그인/회원가입

- 이메일 로그인 가능
- 회원가입 시 각 항목별 유효성 검사
- 주소 API를 통한 주소 입력

| 데스크톱                                       | 모바일                                                    |
| ---------------------------------------------- | --------------------------------------------------------- |
| <img src="docs/gif/회원가입.gif" width="600"/> | <img src="docs/gif/회원가입_모바일버전.gif" width="200"/> |
| <img src="docs/gif/로그인.gif" width="600"/>   | <img src="docs/gif/로그인_모바일버전.gif" width="200"/>   |

---

### 🏠 홈화면

- 메인 배너 및 서비스 안내
- 모임 리스트 추천
- 지도 미리보기: 카카오맵 연동
- 검색 기능: 키워드 및 카테고리 검색

| 데스크톱                                     | 모바일                                                  |
| -------------------------------------------- | ------------------------------------------------------- |
| <img src="docs/gif/홈화면.gif" width="600"/> | <img src="docs/gif/홈화면_모바일버전.gif" width="200"/> |

---

### 📋 모임목록

- 카테고리별, 필터별 검색
- 검색어 검색
- 북마크 기능

| 데스크톱                                          | 모바일                                                      |
| ------------------------------------------------- | ----------------------------------------------------------- |
| <img src="docs/gif/모임리스트.gif" width="600"/>  | <img src="docs/gif/모임리스트_모바일버전.gif" width="200"/> |
| <img src="docs/gif/모임리스트2.gif" width="600"/> |                                                             |

---

### 📄 모임상세

- 상세 정보 조회
- 주최자 프로필 확인

| 데스크톱                                         | 모바일                                                      |
| ------------------------------------------------ | ----------------------------------------------------------- |
| <img src="docs/gif/상세페이지.gif" width="600"/> | <img src="docs/gif/상세페이지_모바일버전.gif" width="200"/> |

---

### ➕ 모임등록

- 모임 제목, 카테고리, 설명, 날짜, 장소, 성별, 나이, 인원 설정
- 모임 이미지 업로드
- 질문지 작성

| 데스크톱                                       | 모바일                                                    |
| ---------------------------------------------- | --------------------------------------------------------- |
| <img src="docs/gif/모임등록.gif" width="600"/> | <img src="docs/gif/모임등록_모바일버전.gif" width="200"/> |

---

### ✏️ 모임수정

- 기존 모임 내용 호출
- 이미지 업로드 수정
- 질문지 작성 수정

| 데스크톱                                       | 모바일                                                    |
| ---------------------------------------------- | --------------------------------------------------------- |
| <img src="docs/gif/모임수정.gif" width="600"/> | <img src="docs/gif/모임수정_모바일버전.gif" width="200"/> |

---

### ✉️ 모임신청

- 질문지 답변
- 신청 관리

| 데스크톱                                       | 모바일                                                    |
| ---------------------------------------------- | --------------------------------------------------------- |
| <img src="docs/gif/모임신청.png" width="600"/> | <img src="docs/gif/모임신청_모바일버전.gif" width="200"/> |

---

### 👀 모임조회

- 전체, 참여 전, 참여 후 구분 표시

| 데스크톱                                       | 모바일                                                    |
| ---------------------------------------------- | --------------------------------------------------------- |
| <img src="docs/gif/모임조회.gif" width="600"/> | <img src="docs/gif/모임조회_모바일버전.gif" width="200"/> |

---

### ⭐ 북마크

- 북마크 토글로 목록 추가/제거 가능

| 데스크톱                                     | 모바일                                                  |
| -------------------------------------------- | ------------------------------------------------------- |
| <img src="docs/gif/북마크.gif" width="600"/> | <img src="docs/gif/북마크_모바일버전.gif" width="200"/> |

---

### 👤 마이페이지

- 프로필 수정
- 관리하기
- 모임조회
- 북마크 연결

| 데스크톱                                         | 모바일                                                      |
| ------------------------------------------------ | ----------------------------------------------------------- |
| <img src="docs/gif/마이페이지.png" width="600"/> | <img src="docs/gif/마이페이지_모바일버전.png" width="200"/> |

---

### ⚙️ 관리페이지

- 참여 신청자 조회
- 질문지 답변 확인
- 승인/거절 처리
- 알림 전송

| 데스크톱                                         | 모바일                                                      |
| ------------------------------------------------ | ----------------------------------------------------------- |
| <img src="docs/gif/관리페이지.gif" width="600"/> | <img src="docs/gif/관리페이지_모바일버전.png" width="200"/> |

---

### 🗺️ 모임지도

- 필터로 모임 필터링
- 지역별 모임 위치 표시 (카카오맵 API)

| 데스크톱                                         | 모바일                                                      |
| ------------------------------------------------ | ----------------------------------------------------------- |
| <img src="docs/gif/지도페이지.gif" width="600"/> | <img src="docs/gif/지도페이지_모바일버전.gif" width="200"/> |

---

### 🤖 AI 추천

- AI 기반 모임 추천 결과 제공

| 데스크톱                                 | 모바일                                              |
| ---------------------------------------- | --------------------------------------------------- |
| <img src="docs/gif/ai.gif" width="600"/> | <img src="docs/gif/ai_모바일버전.gif" width="200"/> |

---

### 💬 1:1 채팅

- 주최자와 실시간 채팅

| 데스크톱                                   | 모바일                                                |
| ------------------------------------------ | ----------------------------------------------------- |
| <img src="docs/gif/채팅.png" width="600"/> | <img src="docs/gif/채팅_모바일버전.png" width="200"/> |

---

## 🔄 워크플로우

<div align="center">
  <img src="docs/images/워크플로우.png" alt="워크플로우" width="600">
</div>

## 🐛 트러블슈팅

| 이름     | 문제점                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 해결 방법                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **민기** | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **현욱** | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **현주** | 북마크 클릭 시 여러 개가 동시에 선택되는 버그 발생. `git pull`을 받지 않아 최신 코드가 누락됨.                                                                                                                                                                                                                                                                                                                                                                                                             | `git pull`, `git merge`를 통해 최신 코드 동기화 후 해결                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **지안** | 1. **Git 브랜치 동기화 문제**: `develop` 브랜치에서 `git pull`이 정상적으로 되지 않는 문제 발생<br/>2. **CSS Module `:global` 사용 문제**: CSS Module에서 `:global`을 사용하면서 스타일이 전역으로 적용되어 다른 페이지에도 영향을 주는 문제 발생<br/>3. **로그인 상태 유지 문제**: 로그인 여부를 `useState`로만 판단해 로그인되지 않았을 경우 로그인 페이지로 강제 이동하도록 구현했는데, 새로고침 시 로그인 상태에서도 로그인 화면으로 이동하는 문제 발생. Hydration 이전 상태를 `false`로 인식했기 때문 | 1. **Git 동기화 해결**: rebase 사용 시 발생하는 히스토리 오염 문제를 팀원들에게 공유. 이후 `git pull`이 되지 않는 경우 `rebase` 대신 `merge` 전략을 사용하도록 협업 방식을 정리하여 develop 브랜치와의 버전을 안정적으로 맞춤<br/>2. **CSS 격리**: `:global` 사용을 최소화하고, 필요한 경우 더 구체적인 선택자를 사용하여 적용 범위를 제한. 컴포넌트 단위로 스타일이 격리되도록 구조 개선<br/>3. **Hydration 처리**: `useStore.ts`에 `setHasHydrated`를 추가하여 상태가 hydration된 이후에만 로그인 여부를 판단하도록 수정. 새로고침 시에도 로그인 상태가 정상적으로 유지되도록 개선 |

## 🏗 시스템 아키텍처

### 기술 구성

- **Frontend**: React + Next.js (App Router)
- **Styling**: CSS Module
- **상태 관리**: Zustand (sessionStorage persist)
- **서버 통신**: Fetch API + Next.js Server Actions
- **캐시/갱신**: fetch 캐시 태그 + revalidateTag, revalidatePath

### 데이터 흐름

1. **조회**: 서버 컴포넌트에서 게시글/댓글 데이터 fetch
2. **생성/수정/삭제**: Server Action으로 API 호출
3. **캐시 갱신**: 성공 시 자동으로 캐시 업데이트
4. **인증**: 로그인 성공 시 Zustand store에 사용자 정보 저장

### API 통신

- 모든 요청에 `Client-Id` 헤더 포함
- 인증이 필요한 요청은 `Authorization: Bearer <token>` 헤더 사용
- 서버 측에서 권한 검증 수행

## 🔐 보안 및 정책

- 인증 필요 기능은 로그인 사용자만 접근 가능
- 수정/삭제는 작성자 본인만 가능
- 토큰은 localStorage에 저장

## 추가하고 싶은 페이지 및 기능

- 다양한 디바이스 환경을 고려한 반응형 UI로 확장
- 웹 접근성 향상을 위한 시맨틱 구조 및 키보드 네비게이션 적용
- 번개 중심 서비스에서 커뮤니티 기능으로 확장

## 회고

- 민기:
- 현욱:
- 현주
  - 좋았던 점: React와 next.js로 프로젝트를 만드는것은 처음이었는데 조원분들의 도움으로 프로젝트를 만들 수 있었고, 문제없이 순항한 것 같아 만족스럽습니다.
  - 아쉬웠던 점: 4개의 파트를 맡았었는데 저의 안일함으로 지연이 되서 부분은 다른 분들이 맡게 되어 아쉬웠습니다.
- 지안
  - 좋았던 점: 좋은 팀원들을 만나 많이 배울 수 있게 되어서 정말 좋았고, Next.js로 웹페이지를 만든 경험이 생겨서 만족스러웠습니다.
  - 아쉬웠던 점: 브랜치 관리에 대한 이해 부족으로 협업 과정에서 어려움을 겪었으며, 이를 통해 체계적인 Git 활용 능력의 중요성을 깨닫게 되었습니다.

## 📌 스크럼/회의록

### 2026년 1월

| 일  |                     월                     |                     화                     |                     수                     |                     목                     |                     금                     | 토  |
| :-: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------: | :-: |
|     |                                            |                                            |                                            |                     1                      |                     2                      |  3  |
|  4  |                     5                      |                     6                      |                     7                      |                     8                      |                     9                      | 10  |
| 11  |                     12                     |                     13                     | [14](docs/dailyscrum/0114-데일리스크럼.md) | [15](docs/dailyscrum/0115-데일리스크럼.md) | [16](docs/dailyscrum/0116-데일리스크럼.md) | 17  |
| 18  | [19](docs/dailyscrum/0119-데일리스크럼.md) | [20](docs/dailyscrum/0120-데일리스크럼.md) | [21](docs/dailyscrum/0121-데일리스크럼.md) | [22](docs/dailyscrum/0122-데일리스크럼.md) | [23](docs/dailyscrum/0123-데일리스크럼.md) | 24  |
| 25  | [26](docs/dailyscrum/0126-데일리스크럼.md) | [27](docs/dailyscrum/0127-데일리스크럼.md) | [28](docs/dailyscrum/0128-데일리스크럼.md) | [29](docs/dailyscrum/0129-데일리스크럼.md) | [30](docs/dailyscrum/0130-데일리스크럼.md) | 31  |

### 2026년 2월

| 일  |                    월                     |                     화                     |                     수                     |                     목                     | 금  | 토  |
| :-: | :---------------------------------------: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------: | :-: | :-: |
|  1  | [2](docs/dailyscrum/0202-데일리스크럼.md) | [3](docs/dailyscrum/0203-데일리스크럼.md)  | [4](docs/dailyscrum/0204-데일리스크럼.md)  | [5](docs/dailyscrum/0205-데일리스크럼.md)  |  6  |  7  |
|  8  | [9](docs/dailyscrum/0209-데일리스크럼.md) | [10](docs/dailyscrum/0210-데일리스크럼.md) | [11](docs/dailyscrum/0211-데일리스크럼.md) | [12](docs/dailyscrum/0212-데일리스크럼.md) | 13  | 14  |
| 15  |                    16                     |                     17                     |                     18                     |                     19                     | 20  | 21  |
| 22  |                    23                     |                     24                     |                     25                     |                     26                     | 27  | 28  |

## 📁 프로젝트 폴더 구조

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   │
│   ├── (main)/
│   │   ├── page.tsx
│   │   └── components/
│   │       ├── Hamburger.tsx
│   │       └── AiRecommendModal.tsx
│   │
│   ├── (view)/
│   │   ├── Bookmarks/
│   │   │   └── page.tsx
│   │   └── History/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Filter.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Author.tsx
│   │   ├── BookmarkButton.tsx
│   │   ├── DefaultLayout.tsx
│   │   ├── MeetingCard.tsx
│   │   └── MobileSidebar.tsx
│   │
│   ├── meetings/
│   │   ├── [id]/
│   │   │   ├── apply/
│   │   │   │   └── page.tsx
│   │   │   ├── edit/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── add/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   │
│   ├── map/
│   │   └── page.tsx
│   │
│   ├── mypage/
│   │   ├── modify/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   │
│   ├── notifications/
│   │   └── page.tsx
│   │
│   ├── faq/
│   │   └── page.tsx
│   │
│   ├── manage/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── lib/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── meeting.ts
│   │   ├── bookmarks.ts
│   │   ├── notification.ts
│   │   ├── chat.ts
│   │   └── user.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useMeeting.ts
│   │   └── useBookmark.ts
│   │
│   └── utils/
│       ├── validators.ts
│       └── format.ts
│
├── store/
│   ├── authStore.ts
│   ├── userStore.ts
│   └── meetingStore.ts
│
├── types/
│   ├── auth.ts
│   ├── meeting.ts
│   ├── user.ts
│   ├── notification.ts
│   ├── api.ts
│   ├── chat.ts
│   ├── kakaomap.ts
│   └── manage.ts
│
├── styles/
│   └── globals.css
│
├── utils/
│   └── apiWithAuth.ts
│
└── zustand/
    ├── bookmarkStore.ts
    ├── chatStore.ts
    ├── meetingStore.ts
    ├── notificationStore.ts
    └── userStore.ts
```

### 📂 주요 디렉토리 설명

#### 🔐 `/app/(auth)` - 인증 관련 페이지

- **login/** - 이메일 기반 로그인 페이지
- **signup/** - 회원가입 및 유효성 검사 페이지

#### 🏠 `/app/(main)` - 메인 페이지

- **page.tsx** - 서비스 메인 페이지
- **components/** - 메인 페이지 전용 컴포넌트
  - `AiRecommendModal.tsx` - AI 기반 모임 추천 모달
  - `CategorySection.tsx` - 카테고리별 모임 섹션
  - `MeetingsContent.tsx` - 모임 리스트 콘텐츠

#### 👁️ `/app/(view)` - 조회 페이지

- **bookmarks/** - 북마크한 모임 목록
- **history/** - 참여 이력 조회

#### 🧩 `/app/components` - 공통 컴포넌트

- **Header.tsx** - 전역 헤더 (로그인, 메뉴)
- **Footer.tsx** - 전역 푸터
- **Filter.tsx** - 모임 필터 컴포넌트
- **MeetingCard.tsx** - 모임 카드 UI
- **BookmarkButton.tsx** - 북마크 토글 버튼
- **Author.tsx** - 작성자 프로필 컴포넌트
- **DefaultLayout.tsx** - 기본 레이아웃 템플릿
- **MobileSidebar.tsx** - 모바일 사이드바 메뉴

#### 👥 `/app/meetings` - 모임 관련 페이지

- **page.tsx** - 모임 목록 (검색, 필터링)
- **add/** - 모임 등록 (제목, 카테고리, 날짜, 장소, 질문지)
- **[id]/page.tsx** - 모임 상세 정보
- **[id]/apply/** - 모임 신청 (질문지 답변)
- **[id]/edit/** - 모임 수정

#### 🗺️ `/app/map` - 지도 페이지

- **page.tsx** - 카카오맵 기반 모임 지도
- **KakaoMap.tsx** - 카카오맵 컴포넌트
- **Map.tsx** - 지도 래퍼 컴포넌트

#### 👤 `/app/mypage` - 마이페이지

- **page.tsx** - 사용자 프로필 및 활동 내역
- **MyPage.tsx** - 마이페이지 메인 컴포넌트
- **modify/** - 프로필 정보 수정

#### 💬 `/app/chat` - 채팅 페이지

- **page.tsx** - 채팅 메인 페이지
- **ChatMain.tsx** - 채팅 메인 레이아웃
- **ChatRoom.tsx** - 개별 채팅방
- **ChatRoomList.tsx** - 채팅방 목록
- **MessageBubble.tsx** - 메시지 말풍선

#### 🔔 `/app/notifications` - 알림 페이지

- **page.tsx** - 알림 목록
- **Notifications.tsx** - 알림 컴포넌트
- **NotificationItem.tsx** - 개별 알림 아이템

#### 📋 `/app/manage` - 관리 페이지

- **page.tsx** - 내가 만든 모임 관리
- **ManageContent.tsx** - 관리 콘텐츠
- **[id]/page.tsx** - 특정 모임 참여자 관리 (승인/거절)

#### ⚡ `/actions` - Server Actions

- **meetings.ts** - 모임 생성/수정/삭제
- **bookmarks.ts** - 북마크 추가/제거
- **chat.ts** - 채팅 메시지 전송/조회
- **manage.ts** - 참여 신청 승인/거절
- **notification.ts** - 알림 전송/조회
- **user.ts** - 사용자 정보 조회/수정
- **ai-recommend.ts** - AI 기반 모임 추천
- **file.ts** - 이미지 파일 업로드

#### 🔧 `/lib` - API 호출 함수

- **meetings.ts** - 모임 관련 API
- **bookmarks.ts** - 북마크 API
- **chat.ts** - 채팅 API
- **manage.ts** - 관리 API
- **user.ts** - 사용자 API
- **common.ts** - 공통 API 유틸리티

#### 🪝 `/hooks` - 커스텀 React Hooks

- **useChat.ts** - 채팅 상태 관리 Hook
- **useFilter.ts** - 필터 상태 관리 Hook
- **useNoti.ts** - 알림 상태 관리 Hook

#### 🛠️ `/utils` - 유틸리티 함수

- **apiWithAuth.ts** - 인증 토큰을 포함한 API 호출 래퍼

#### 💾 `/zustand` - 전역 상태 관리

- **userStore.ts** - 사용자 정보 (로그인, 프로필)
- **meetingStore.ts** - 모임 데이터
- **bookmarkStore.ts** - 북마크 상태
- **chatStore.ts** - 채팅 상태
- **notificationStore.ts** - 알림 상태

#### 📝 `/types` - TypeScript 타입 정의

- **user.ts** - 사용자 관련 타입
- **meetings.ts** - 모임 관련 타입
- **bookmarks.ts** - 북마크 타입
- **chat.ts** - 채팅 타입
- **manage.ts** - 관리 타입
- **notification.ts** - 알림 타입
- **apply.ts** - 신청 타입
- **kakaomap.ts** - 카카오맵 타입
- **api.ts** - API 응답 공통 타입

---
