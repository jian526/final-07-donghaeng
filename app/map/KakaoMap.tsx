'use client'; // 클라이언트 선언

// 사용할 라이브러리 import
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// 카카오맵 타입 선언
interface KakaoMapProps {
  width?: string;
  height?: string;
  lat?: number;
  lng?: number;
  className?: string;
}

// 카카오맵 함수 제작
/*
  props로 width, height, lat(위도), lng(경도), css클래스명을 받아옴
 */
export default function KakaoMap({ width = '100%', height = '500px', lat = 37.5709, lng = 126.978, className }: KakaoMapProps) {
  // 로딩 판별 state
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    // 컴포넌트를 감싸는 div
    <div className={className} style={{ width, height, overflow: 'hidden' }}>
      {/* Script: 외부 스크립트의 로딩 우선순위를 최적화하여 페이지 서능을 향상시키는 도구 */}
      {/* strategy: 로딩 동작을 미세 조정, afterInteractive: 페이지 일부가 수화된 후 일찍 스크립트를 로드 */}
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => {
          window.kakao.maps.load(() => {
            setIsLoaded(true);
          });
        }}
      />
      {isLoaded ? (
        <Map center={{ lat, lng }} style={{ width: '100%', height: '100%' }} level={3}>
          <MapMarker position={{ lat, lng }} />
        </Map>
      ) : (
        <div style={{ width: '100%', height: '100%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>지도 로딩중...</div>
      )}
    </div>
  );
}
