'use client';

import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './AiRecommendModal.module.css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

type Step = 'intro' | 'age' | 'gender' | 'preference1' | 'preference2' | 'preference3' | 'result';

type Meeting = {
  id: number;
  title: string;
  category: {
    location: string;
    theme: string;
    age: string;
    gender: string;
    people: string;
  };
  date: string;
  joined: boolean;
};

function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <figure className={styles.imageWrapper}>
          <div className={styles.characterImage} role="img" aria-label="모임 대표 이미지"></div>
          <figcaption className={`sr-only`}>모임 대표 이미지</figcaption>
        </figure>
        <div className={styles.infoWrapper}>
          <h2 className={styles.cardTitle}>{meeting.title}</h2>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span className={styles.bullet} aria-hidden="true">
                <Image src="/icon/tag.svg" width={18} height={18} alt="장소 아이콘" />
              </span>
              <p>
                {meeting.category.location}. {meeting.category.theme}
              </p>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet} aria-hidden="true">
                <Image src="/icon/info.svg" width={18} height={18} alt="정보 아이콘" />
              </span>
              <p>
                {meeting.category.age}, {meeting.category.gender}
              </p>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet} aria-hidden="true">
                <Image src="/icon/people.svg" width={18} height={18} alt="사람들 아이콘" />
              </span>
              <p>{meeting.category.people}</p>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet} aria-hidden="true">
                <Image src="/icon/calendar.svg" width={18} height={18} alt="날짜 아이콘" />
              </span>
              <p>{meeting.date}</p>
            </li>
          </ul>
        </div>
      </div>
      <Link href={`/meetings/${meeting.id}`} className={styles.arrowIcon}>
        <Image src="/icon/arrow.svg" alt="상세보기" width={19} height={12} />
      </Link>
    </article>
  );
}

export default function AiRecommendModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState({
    age: '',
    gender: '',
    preference1: '',
    preference2: '',
    preference3: '',
  });

  const meetings = [
    {
      id: 1,
      title: '세상에서 제일 비싼 두쫀쿠 만들기',
      category: {
        location: '마포구',
        theme: '보드게임',
        age: '20~30대',
        gender: '남녀무관',
        people: '인원 4~5명',
      },
      date: '26.1.27(화) 오후 3:00',
      joined: false,
    },
    {
      id: 2,
      title: '한강에서 자전거 타기',
      category: {
        location: '강남구',
        theme: '운동',
        age: '20~30대',
        gender: '남녀무관',
        people: '인원 3~4명',
      },
      date: '26.1.28(수) 오후 2:00',
      joined: true,
    },
    {
      id: 3,
      title: '북촌 한옥마을 산책',
      category: {
        location: '종로구',
        theme: '문화탐방',
        age: '전연령',
        gender: '여성만',
        people: '인원 2~3명',
      },
      date: '26.1.29(목) 오후 4:00',
      joined: false,
    },
    {
      id: 4,
      title: '북촌 한옥마을 산책',
      category: {
        location: '종로구',
        theme: '문화탐방',
        age: '전연령',
        gender: '여성만',
        people: '인원 2~3명',
      },
      date: '26.1.29(목) 오후 4:00',
      joined: false,
    },
    {
      id: 5,
      title: '북촌 한옥마을 산책',
      category: {
        location: '종로구',
        theme: '문화탐방',
        age: '전연령',
        gender: '여성만',
        people: '인원 2~3명',
      },
      date: '26.1.29(목) 오후 4:00',
      joined: false,
    },
    {
      id: 6,
      title: '북촌 한옥마을 산책',
      category: {
        location: '종로구',
        theme: '문화탐방',
        age: '전연령',
        gender: '여성만',
        people: '인원 2~3명',
      },
      date: '26.1.29(목) 오후 4:00',
      joined: false,
    },
    {
      id: 7,
      title: '북촌 한옥마을 산책',
      category: {
        location: '종로구',
        theme: '문화탐방',
        age: '전연령',
        gender: '여성만',
        people: '인원 2~3명',
      },
      date: '26.1.29(목) 오후 4:00',
      joined: false,
    },
    {
      id: 8,
      title: '북촌 한옥마을 산책',
      category: {
        location: '종로구',
        theme: '문화탐방',
        age: '전연령',
        gender: '여성만',
        people: '인원 2~3명',
      },
      date: '26.1.29(목) 오후 4:00',
      joined: false,
    },
  ];

  // 이전 단계로 이동
  const goBack = () => {
    const steps: Step[] = ['intro', 'age', 'gender', 'preference1', 'preference2', 'preference3', 'result'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  // 모달 닫을 때 초기화
  const handleClose = () => {
    setStep('intro');
    setAnswers({ age: '', gender: '', preference1: '', preference2: '', preference3: '' });
    onClose();
  };
  const handleRetry = () => {
    setStep('intro');
    setAnswers({ age: '', gender: '', preference1: '', preference2: '', preference3: '' });
  };

  // 선택 처리
  const handleSelect = (key: keyof typeof answers, value: string, nextStep: Step) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(nextStep);
  };

  return (
    <Dialog open={open} onClose={handleClose} className={styles.root}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.modal}>
          {/* 뒤로가기 + 닫기 버튼 */}
          <div className={styles[`btn-wrapper`]}>
            {step !== 'intro' && (
              <button className={styles[`back-btn`]} type="button" onClick={goBack} aria-label="뒤로가기">
                <Image src="/icon/left.svg" alt="" width={11} height={20} />
              </button>
            )}
            <button className={styles[`close-btn`]} type="button" onClick={handleClose} aria-label="닫기">
              <Image src="/icon/close.svg" alt="" width={20} height={20} />
            </button>
          </div>

          {/* 로고 */}
          <div className={styles[`logo-image`]}>
            <Image src="/logo/logo.svg" alt="Moa 로고" width={125} height={100} />
          </div>

          {/* Step: intro */}
          {step === 'intro' && (
            <div className={styles[`intro-wrapper`]}>
              <p>안녕하세요!</p>
              <p>Moa에 오신 여러분을 환영해요.</p>
              <p>AI 추천 기능을 통해</p>
              <p>모임을 추천 받아보세요!</p>
              <button className={styles[`intro-btn`]} type="button" onClick={() => setStep('age')}>
                모임 추천 시작!
              </button>
            </div>
          )}

          {/* Step: age */}
          {step === 'age' && (
            <div className={styles[`age-wrapper`]}>
              <p>당신의 나이대는?</p>
              <div className={styles[`age-btn-wrapper`]}>
                <button type="button" onClick={() => handleSelect('age', '10대', 'gender')}>
                  10대
                </button>
                <button type="button" onClick={() => handleSelect('age', '20대', 'gender')}>
                  20대
                </button>
                <button type="button" onClick={() => handleSelect('age', '30대', 'gender')}>
                  30대
                </button>
                <button type="button" onClick={() => handleSelect('age', '40대 이상', 'gender')}>
                  40대 이상
                </button>
              </div>
            </div>
          )}

          {/* Step: gender */}
          {step === 'gender' && (
            <div className={styles[`gender-wrapper`]}>
              <p>당신의 성별은?</p>
              <div className={styles[`gender-btn-wrapper`]}>
                <button type="button" onClick={() => handleSelect('gender', '남자', 'preference1')}>
                  남자
                </button>
                <button type="button" onClick={() => handleSelect('gender', '여자', 'preference1')}>
                  여자
                </button>
              </div>
            </div>
          )}

          {/* Step: preference1 - 나에게 더 편한 상황은? */}
          {step === 'preference1' && (
            <div className={styles[`preference1-wrapper`]}>
              <p>나에게 더 편한 상황은?</p>
              <div className={styles[`preference1-btn-wrapper`]}>
                <button type="button" onClick={() => handleSelect('preference1', '여러 명이 동시에 이야기하는 자리', 'preference2')}>
                  여러 명이 동시에 이야기하는 자리
                </button>
                <button type="button" onClick={() => handleSelect('preference1', '한두 명이랑 조용히 대화하는 자리', 'preference2')}>
                  한두 명이랑 조용히 대화하는 자리
                </button>
              </div>
            </div>
          )}

          {/* Step: preference2 - 모임 후 기억에 더 남는 건? */}
          {step === 'preference2' && (
            <div className={styles[`preference2-wrapper`]}>
              <p>모임 후 기억에 더 남는 건?</p>
              <div className={styles[`preference2-btn-wrapper`]}>
                <button type="button" onClick={() => handleSelect('preference2', '무엇을 했는지, 어디 갔는지 같은 사실', 'preference3')}>
                  무엇을 했는지, 어디 갔는지 같은 사실
                </button>
                <button type="button" onClick={() => handleSelect('preference2', '그날의 분위기나 감정, 인상적인 순간', 'preference3')}>
                  그날의 분위기나 감정, 인상적인 순간
                </button>
              </div>
            </div>
          )}

          {/* Step: preference3 - 어떤 모임 설명 중 더 끌리는 건? */}
          {step === 'preference3' && (
            <div className={styles[`preference3-wrapper`]}>
              <p>이런 모임 설명 중 더 끌리는 건?</p>
              <div className={styles[`preference3-btn-wrapper`]}>
                <button type="button" onClick={() => handleSelect('preference3', '편한 분위기, 서로 배려하는 모임', 'result')}>
                  편한 분위기, 서로 배려하는 모임
                </button>
                <button type="button" onClick={() => handleSelect('preference3', '정해진 방식으로 효율적으로 진행', 'result')}>
                  정해진 방식으로 효율적으로 진행
                </button>
              </div>
            </div>
          )}

          {/* Step: result */}
          {step === 'result' && (
            <>
              <div className={styles[`mobile-recommend-wrapper`]}>
                <p>모임을 추천 해드릴게요!</p>
                <div className={styles[`meetings-card`]}>
                  <Link href="/meetings/1">
                    <div className={styles[`meetings-info`]}>
                      <Image className={styles[`meetings-image`]} src="/images/img.png" width={60} height={60} alt="모임 이미지"></Image>
                      <div className={styles[`meetings-title`]}>세상에서 제일 비싼 두쫀쿠 만들기</div>
                    </div>
                    <Image className={styles[`arrow-image`]} src="/icon/arrow.svg" width={19} height={8} alt="화살표"></Image>
                  </Link>
                </div>
                <div className={styles[`meetings-card`]}>
                  <Link href="/meetings/1">
                    <div className={styles[`meetings-info`]}>
                      <Image className={styles[`meetings-image`]} src="/images/img.png" width={60} height={60} alt="모임 이미지"></Image>
                      <div className={styles[`meetings-title`]}>세상에서 제일 비싼 두쫀쿠 만들기</div>
                    </div>
                    <Image className={styles[`arrow-image`]} src="/icon/arrow.svg" width={19} height={8} alt="화살표"></Image>
                  </Link>
                </div>
                <div className={styles[`meetings-card`]}>
                  <Link href="/meetings/1">
                    <div className={styles[`meetings-info`]}>
                      <Image className={styles[`meetings-image`]} src="/images/img.png" width={60} height={60} alt="모임 이미지"></Image>
                      <div className={styles[`meetings-title`]}>세상에서 제일 비싼 두쫀쿠 만들기</div>
                    </div>
                    <Image className={styles[`arrow-image`]} src="/icon/arrow.svg" width={19} height={8} alt="화살표"></Image>
                  </Link>
                </div>
              </div>
              <div className={styles[`desktop-recommend-wrapper`]}>
                <p>모임을 추천 해드릴게요!</p>
                <Swiper modules={[Pagination]} spaceBetween={10} slidesPerView={'auto'} centeredSlides={true} pagination={{ clickable: true }} className={styles.swiper}>
                  {meetings.map((meeting) => (
                    <SwiperSlide key={meeting.id}>
                      <MeetingCard meeting={meeting} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <button className={styles[`retry-btn`]} type="button" onClick={handleRetry}>
                검사 다시하기
              </button>
            </>
          )}
        </div>
      </div>
    </Dialog>
  );
}
