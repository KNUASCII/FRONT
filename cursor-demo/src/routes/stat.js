// 감정 기능
import React, { useState, useEffect } from "react";
import './stats.css';
import axios from 'axios'; // axios 라이브러리 import




const RegularPentagon = ({ fill = "lightblue", stroke = "black", strokeWidth = 2 }) => {
  const [stats, setStats] = useState({기쁨:0.1, 슬픔:0.1, 분노:0.1, 불안:0.1, 무기력:0.1}); // 초기 상태 0.1로 한 이유 오각형 모양 이상함

  useEffect(() => {
    // 서버에서 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/emotion/userEmotion'); // 서버 URL을 입력하세요
        setStats(response.data); // 받아온 데이터로 상태 업데이트
      } catch (error) {
        console.error("서버에서 데이터를 가져오는데 실패했습니다.", error);
      }
    };

    fetchData(); // 함수 실행
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행

  const size = 150;
  const maxStat = Math.max(...Object.values(stats)); // 가장 높은 감정 상태 값
  const centerX = size; // 중심 x 좌표
  const centerY = size; // 중심 y 좌표

  // 감정 상태에 따른 정오각형 꼭짓점 좌표 계산
  const points = Object.values(stats).map((stat, i) => {
    // 모든 감정 상태 값이 동일한 경우, 반지름을 10으로 설정
    const radius = (stat / maxStat) * (maxStat === 0.1 ? 5 : size); 
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

  // 감정 상태에 따른 텍스트 위치 계산
  const textPoints = Object.values(stats).map((stat, i) => {
    const radius = size - 15; // 텍스트를 오각형 꼭짓점에 위치하도록 설정
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2; // -90도부터 시작
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return {x, y};
  });

  return (
    <div>
      <h1 className="emotion-analysis-title">감정 상태 분석</h1>
      <svg width={size * 2 + 40} height={size * 2 + 40} xmlns="http://www.w3.org/2000/svg">
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
        {textPoints.map((point, i) => (
          <text x={point.x} y={point.y} fill="black" textAnchor="middle" dominantBaseline="middle">
            {Object.keys(stats)[i]}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default RegularPentagon;
