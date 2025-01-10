import React from 'react';
import { Link, Element } from 'react-scroll';
import './page1.css'; // 스타일 파일
import { useInView } from "react-intersection-observer";
import logo from '../Images/Main_logo.png'; // 로고 이미지 경로
import asciiLogo from '../Images/ASCII_logo.png'; // 이미지 가져오기
import pluscenter from '../Images/KNU_PlusCenter.png';
import maeum from '../Images/KNU_MaeumCenter.png';

const LandingPage = () => {
  // useInView를 사용해 ref와 상태값 정의
  const { ref: section3Ref, inView: isSection3Visible } = useInView({
    threshold: 0.5, // 50% 화면에 보일 때 트리거
  });

  const { ref: section4Ref, inView: isSection4Visible } = useInView({
    threshold: 0.5, // 섹션 4의 50%가 화면에 보일 때 트리거
  });

  const { ref: section5Ref, inView: isSection5Visible } = useInView({
    threshold: 0.5, // 섹션 4의 50%가 화면에 보일 때 트리거
  });

  const { ref: section6Ref, inView: isSection6Visible } = useInView({
    threshold: 0.5, // 섹션 4의 50%가 화면에 보일 때 트리거
  });
  
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
          <div className="arrow">
            <Link to="section2" smooth={true} duration={500} className="arrow-shape"></Link>
          </div>
        </header>
      </Element>

      {/* 섹션 2 */}
      <Element name="section2" className="section section2">
        <p className = "One_Minutes">“하루에 단 1분, 너의 감정을 들여다 봐!”</p>
      </Element>

      {/* 섹션 3 */}
      <Element name="section3" className="section section3">
        <div ref={section3Ref} className="content">
            <div className={`text ${isSection3Visible ? "fade-in-left" : ""}`}>
                  <p className="section3_phrase">
                    <p style={{ color: "blue", size: "14px" }}>AI 감정일기</p>
                    오늘, 힘든 일이 있었니?<br />
                    느낀 생각들을 <strong>AI 감정 일기</strong>에 담아봐.<br />
                    "금방 괜찮아질 거야" 같은 <strong>막연한 말 대신, </strong><br/>
                    <strong>실질적인 조언과 </strong>따뜻한 한마디를 건네줄게.
                  </p>
              </div>
          <div className={`img ${isSection3Visible ? "fade-in-right" : ""}`}>
            <img src={asciiLogo} alt="ASCII" />
          </div>
        </div>
      </Element>

      {/* 섹션 4 */}
      <Element name="section4" className="section section4">
        <div ref={section4Ref} className="content">
          <div className={`text ${isSection4Visible ? "fade-in-left" : ""}`}>
            <p className="section3_phrase">
              <p style={{ color: "blue", size: "14px" }}>AI 감정 저널링</p>
                "내 마음을 어제보다 조금 더 잘 아는 방법"<br />
                매일 쌓인 내 감정을 <strong>그래프</strong>로 확인할 수 있어.<br />
                쉽고 편리한 <strong>AI 감정 저널링</strong>으로 꺼내봐.
            </p>
          </div>
          <div className={`img ${isSection4Visible ? "fade-in-right" : ""}`}>
            <img src={asciiLogo} alt="ASCII" />
          </div>
        </div>
      </Element>

      {/* 섹션 5 */}
      <Element name="section5" className="section section5">
        <div ref={section5Ref} className="content">
            <div className={`text ${isSection5Visible ? "fade-in-down" : ""}`}>
              <p className = "section5_phrase">힘들거나 도움이 필요할 땐,<br/>
              교내 상담실 또는 관련 센터로 연결,<br/>
              "이런 게 있었어?" 싶을 만큼 <strong>가까운 도움</strong>도 있어.</p>
            </div>
            <div className={`img ${isSection5Visible ? "fade-in-down" : ""}`}>
              <img src={pluscenter} 
              alt="PLUS" 
              className={`img-pluscenter ${isSection5Visible ? "fade-in-right" : ""}`}/>
              <img src={maeum} 
              alt="MAEUM" 
              className={`img-pluscenter ${isSection5Visible ? "fade-in-left" : ""}`}/>
            </div>
        </div>
      </Element>

      {/* 섹션 6 */}
      <Element name="section6" className="section section6">
        <div ref={section6Ref} className="content">
          <div className={`text ${isSection6Visible ? "fade-in-down" : ""}`}>
              <p className = "section6_phrase">매일 기록할수록, 마음이 한결 가벼워질거야.<br/>
              지금부터 천천히, 시작해볼래?</p>
          </div>
            <div className={`text ${isSection6Visible ? "fade-in-down" : ""}`}>
              <Link to="section2" smooth={true} duration={500} className="start-button">
                시작하기
              </Link>
            </div>
          </div>
      </Element>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Your Company Name. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};


export default LandingPage;
