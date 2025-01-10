import React from 'react';
import { Link, Element } from 'react-scroll';
import './page1.css'; // 스타일 파일
import logo from '../Images/Main_logo.png'; // 로고 이미지 경로

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* 섹션 1 */}
      <Element name="section1" className="section section1">
        <header className="header">
          <img src={logo} alt="MA:IN 로고" className="logo" />
          <h1>
            <span className="highlight">강냉이</span>를 위한<br />
            AI 일상 감정정리
          </h1>
          <Link to="section2" smooth={true} duration={500} className="start-button">
            시작하기
          </Link>
          <div className="arrow"></div>
        </header>
      </Element>

      {/* 섹션 2 */}
      <Element name="section2" className="section section2">
        <p>“하루에 단 1분, 너의 감정을 들여다봐!”</p>
      </Element>

      {/* 섹션 3 */}
      <Element name="section3" className="section section3">
        <h2>섹션 3 제목</h2>
        <p>이곳에 섹션 3의 내용을 추가하세요.</p>
      </Element>

      {/* 섹션 4 */}
      <Element name="section4" className="section section4">
        <h2>섹션 4 제목</h2>
        <p>이곳에 섹션 4의 내용을 추가하세요.</p>
      </Element>

      {/* 섹션 5 */}
      <Element name="section5" className="section section5">
        <h2>섹션 5 제목</h2>
        <p>이곳에 섹션 5의 내용을 추가하세요.</p>
      </Element>

      {/* 섹션 6 */}
      <Element name="section6" className="section section6">
        <h2>섹션 6 제목</h2>
        <p>이곳에 섹션 6의 내용을 추가하세요.</p>
      </Element>

      {/* 네비게이션 */}
      <nav className="navigation">
        <Link to="section1" smooth={true} duration={500}>1</Link>
        <Link to="section2" smooth={true} duration={500}>2</Link>
        <Link to="section3" smooth={true} duration={500}>3</Link>
        <Link to="section4" smooth={true} duration={500}>4</Link>
        <Link to="section5" smooth={true} duration={500}>5</Link>
        <Link to="section6" smooth={true} duration={500}>6</Link>
      </nav>
    </div>
  );
};

export default LandingPage;
