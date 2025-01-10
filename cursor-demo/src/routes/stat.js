import React, { useState, useEffect } from "react";
import axios from 'axios'; // axios 라이브러리 import

const RegularPentagon = ({ fill = "lightblue", stroke = "black", strokeWidth = 2 }) => {
  const [stats, setStats] = useState({joy:0, sadness:0, anger:0, anxiety:0, lethargy:0}); // 초기 상태 설정 단점: 오각형 모양이 1,0,1,0,1 이렇게 하면 모양이 이상해짐.

  useEffect(() => {
    // 서버에서 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/stats'); // 서버 URL을 입력하세요
        setStats(response.data); // 받아온 데이터로 상태 업데이트
      } catch (error) {
        console.error("서버에서 데이터를 가져오는데 실패했습니다.", error);
      }
    };

    fetchData(); // 함수 실행
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행

  const size = 100; // 오각형의 크기를 60으로 변경
  const maxStat = Math.max(...Object.values(stats)); // 가장 높은 감정 상태 값
  const centerX = size; // 중심 x 좌표
  const centerY = size; // 중심 y 좌표

  // 감정 상태에 따른 정오각형 꼭짓점 좌표 계산
  const points = Object.values(stats).map((stat, i) => {
    const radius = (stat / maxStat) * size;  // 감정 상태 값에 따른 반지름 (가장 높은 감정 상태 값에 대한 상대적인 크기)
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2; // -90도부터 시작
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return `${x},${y}`;
  });

  // 빈 오각형의 꼭짓점 좌표 계산
  const emptyPoints = Array(5).fill().map((_, i) => {
    const radius = size;  // 빈 오각형의 반지름은 항상 size와 동일
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2; // -90도부터 시작
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return `${x},${y}`;
  });

  return (
    <div>
      <h1>감정 상태 분석</h1>
      <svg width={size * 2} height={size * 2} xmlns="http://www.w3.org/2000/svg">
        <polygon
          points={points.join(" ")}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <polygon
          points={emptyPoints.join(" ")}
          fill="none"
          stroke="grey"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export default RegularPentagon;
