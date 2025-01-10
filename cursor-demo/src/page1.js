import React from 'react';
import { Link, Element } from 'react-scroll';
import './page1.css'; // 스타일을 위한 CSS 파일
import logo from './Images/MAIN 로고.png'; // 로고 이미지 경로

const Page1 = () => {
  return (
    <div className="page1-container">
      <header className="header">
        <img src={logo} alt="MA:IN 로고" className="logo" />
      </header>
      <main className="main-content">
        <h1>
          <span className="highlight">강냉이</span>를 위한<br />
          AI 일상 감정정리
        </h1>
        <Link to="more-info" smooth={true} duration={500} className="start-button">
          시작하기
        </Link>
      </main>
      <Element name="more-info" className="more-info">
        {/* 추가 정보 섹션 */}
        <p>여기에 추가 정보를 입력하세요.</p>
      </Element>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Page1 />
  </React.StrictMode>
);

export default Page1;
