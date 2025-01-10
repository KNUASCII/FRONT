import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './registerpage.css';
import logo from '../Images/Main_logo.png';
import emotionDiaryIcon from '../Images/emotionDiary_icon.png';
import emotionJournalIcon from '../Images/emotionJournal_icon.png';
import Newdiary from "./newdiary";
import Stat from "./stat";


function RegisterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userID: '',
    password: '',
    passwordCheck: '',
    userName: '',
    birthday: '',
  });
  const [userIDValidation, setUserIDValidation] = useState('');
  const [userNameValidation, setUserNameValidation] = useState('');
  const [birthdayValidation, setBirthdayValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    userID: '',
    password: '',
  });
  const [loggedInUser, setLoggedInUser] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'userID') {
      if (e.target.value.length < 5 || e.target.value.length > 20) {
        setUserIDValidation('아이디는 5글자에서 20글자 사이로 작성해주세요.');
      } else {
        setUserIDValidation('');
      }
    }

    if (e.target.name === 'userName') {
      if (e.target.value.length < 2 || e.target.value.length > 50) {
        setUserNameValidation('이름은 2글자에서 50글자 사이로 작성해주세요.');
      } else {
        setUserNameValidation('');
      }
    }

    if (e.target.name === 'birthday') {
      if (e.target.value.length !== 6) {
        setBirthdayValidation('생년월일은 6자리로 입력해주세요.');
      } else {
        setBirthdayValidation('');
      }
    }

    if (e.target.name === 'password') {
      if (e.target.value.length < 6) {
        setPasswordValidation('비밀번호는 최소 6글자 이상이어야 합니다.');
      } else {
        setPasswordValidation('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.birthday.length !== 6) {
      alert('생년월일은 6자리로 입력해주세요.');
      return;
    }

    if (formData.password !== formData.passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
    console.log(formData);
      const response = await axios.post('http://localhost:8080/api/auth/register', formData);
      alert('회원가입 성공!');
      closeModal();
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다.');
      console.error(error.response.data.message);
    }
  };

  const passwordMatch = formData.password === formData.passwordCheck && formData.password !== '' && formData.passwordCheck !== '';

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', loginData.userID);
      alert('로그인 성공!');
      closeLoginModal();
      setLoggedInUser(loginData.userID);
    } catch (error) {
      alert('아이디 및 비밀번호를 확인해주세요!');
      console.error(error.response.data.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <div className="register-page">
      <div className="sidebar">
        <img src={logo} alt="MA:IN 로고" className="logo" />
        <div className="menu">
          <hr style={{border: '1.5px solid #000'}}/>
          {loggedInUser ? (
            <>
              <p>반갑습니다. {loggedInUser}님</p>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <>
              <button onClick={openLoginModal}>로그인</button>
              <button onClick={openModal}>회원가입</button>
            </>
          )}
          <hr style={{border: '1.5px solid #000'}}/>
          <Link to="/Newdiary" className="menu-item">
            <img src={emotionDiaryIcon} alt="AI 감정 일기" />
            AI 감정 일기
          </Link>
          <Link to="/Stat" className="menu-item">
            <img src={emotionJournalIcon} alt="AI 감정 저널링" />
            AI 감정 저널링
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>←</button>
            <h2>회원가입</h2>

            <form onSubmit={handleSubmit}>

              <label>아이디</label>
              <input 
              type="text" 
              name="userID" 
              value={formData.userID} 
              placeholder="아이디를 입력해주세요." 
              onChange={handleChange} 
              minLength="5" 
              maxLength="20" 
              required
              />
              {userIDValidation && (
                <span className="error-message">{userIDValidation}</span>
              )}

              <label>비밀번호</label>
              <input 
              type="password" 
              name="password" 
              value={formData.password} 
              placeholder="비밀번호를 입력해주세요." 
              onChange={handleChange} minLength="6" 
              className={passwordMatch ? 'success' : ''} />
              {passwordValidation && (
                <span className="error-message">{passwordValidation}</span>
              )}

              <label>비밀번호 확인</label>
              <input 
              type="password" 
              name="passwordCheck" 
              value={formData.passwordCheck} 
              placeholder="비밀번호를 다시 한 번 입력해주세요." 
              onChange={handleChange} 
              className={passwordMatch ? 'success' : 'error'} />
              {!passwordMatch && formData.password !== '' && formData.passwordCheck !== '' && (
                <span className="error-message">비밀번호가 일치하지 않습니다.</span>
              )}

              <label>이름</label>
              <input 
              type="text" 
              name="userName" 
              value={formData.userName} 
              placeholder="이름을 입력해주세요." 
              onChange={handleChange} 
              minLength="2" 
              maxLength="50" 
              required
              />
              {userNameValidation && (
                <span className="error-message">{userNameValidation}</span>
              )}

              <label>생년월일</label>
              <input 
              type="number" 
              name="birthday" 
              value={formData.birthday} 
              placeholder="생년월일을 입력해주세요." 
              onChange={handleChange} 
              title="6자리 숫자로 입력해주세요." 
              />
              {birthdayValidation && (
                <span className="error-message">{birthdayValidation}</span>
              )}
              <button type="submit">확원가입</button>
            </form>
          </div>
        </div>
      )}

      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeLoginModal}>←</button>
            <h2>로그인</h2>

            <form onSubmit={handleLogin}>
              <label>아이디</label>
              <input 
                type="text" 
                name="userID" 
                value={loginData.userID} 
                placeholder="아이디를 입력해주세요." 
                onChange={handleLoginChange} 
                minLength="5" 
                maxLength="20" 
                required
              />

              <label>비밀번호</label>
              <input 
                type="password" 
                name="password" 
                value={loginData.password} 
                placeholder="비밀번호를 입력해주세요." 
                onChange={handleLoginChange} 
                minLength="6" 
              />

              <button type="submit">로그인</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;