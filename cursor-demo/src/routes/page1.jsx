import React from 'react';
import { Link, Element } from 'react-scroll';
import './page1.css'; // 스타일 파일
import logo from '../Images/Main_logo.png'; // 로고 이미지 경로
import asciiLogo from '../Images/ASCII_logo.png'; // 이미지 가져오기

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* 섹션 1 */}
      <Element name="section1" className="section section1">
        <header className="header">
          <img src={logo} alt="MA:IN 로고" className="logo" />
          <h1 className="Intro_Title">
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
        <p className = "One_Minutes">“하루에 단 1분, 너의 감정을 들여다봐!”</p>
      </Element>

      {/* 섹션 3 */}
      <Element name="section3" className="section section3">
        <div className="content">
          <div className="text">
            <h2 style={{ color: "blue" }}>AI 감정 일기</h2>
              <p className = "section3_phrase">오늘, 힘든 일이 있었니?<br/>
                  지금 느낀 생각을 AI 감정 일기에 담아봐.<br/>
                  금방 괜찮아질 거야라는 막연한 말 대신,<br/>
                  실질적인 조언과 따뜻한 한마디를 건네줄게.
              </p>
          </div>
          <div className="img">
            <img src={asciiLogo} alt="ASCII" />
          </div>
        </div>
      </Element>

      {/* 섹션 4 */}
      <Element name="section4" className="section section3">
        <div className="content">
          <div className="text">
            <h2 style={{color : "blue"}}>AI 감정 일기</h2>
            <p className = "section3_phrase">"내 마음을 어제보다 조금 더 잘 아는 방법"<br/>
                매일 쌓인 내 감정을 그래프로 확인할 수 있어.<br/>
                쉽고 편리한 AI 감정 저널링으로 꺼내봐.</p>
          </div>
          <div className="img">
            <img src={asciiLogo} alt="ASCII" />
          </div>
        </div>
      </Element>

      {/* 섹션 5 */}
      <Element name="section5" className="section section5">
        <p className = "section3_phrase">힘들거나 도움이 필요할 땐,<br/>
        교내 상담실 또는 관련 센터로 연결,<br/>
        "이런 게 있었어?" 싶을 만큼 가까운 도움도 있어.</p>
      </Element>

      {/* 섹션 6 */}
      <Element name="section6" className="section section6">
        <p className = "section3_phrase">매일 기록할수록, 마음이 한결 가벼워질거야.<br/>
          지금부터 천천히, 시작해볼래?</p>
          <Link to="section2" smooth={true} duration={500} className="start-button">
            시작하기
          </Link>
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
