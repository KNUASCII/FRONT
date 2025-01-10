import React, { useState } from 'react';
import axios from 'axios';
import './registerpage.css';

function RegisterPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      userID: '',
      password: '',
      passwordCheck: '',
      userName: '',
      birthDate: '',
    });

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value,});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.passwordCheck) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
        }
        try {
          const response = await axios.post('http://localhost:8080/api/auth/register', formData);
          alert('회원가입 성공!');
          closeModal();
        } catch (error) {
          alert('회원가입 중 오류가 발생했습니다.');
          console.error(error.response.data.message);
        }
      };
    
      return (
        <div className="register-page">
          <div className="sidebar">
            <button onClick={openModal}>회원가입</button>
          </div>
          {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>←</button>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
            <label>아이디</label>
              <input type="text" name="userID" value={formData.userID} placeholder="아이디를 입력해주세요." onChange={handleChange} />
              <label>비밀번호</label>
              <input type="password" name="password" value={formData.password} placeholder="비밀번호를 입력해주세요." onChange={handleChange} className="success" />
              <label>비밀번호 확인</label>
              <input type="password" name="passwordCheck" value={formData.passwordCheck} placeholder="비밀번호를 다시 한 번 입력해주세요." onChange={handleChange} className="error" />
              {formData.password !== formData.passwordCheck && (
                <span className="error-message">비밀번호가 일치하지 않습니다.</span>
              )}
              <label>이름</label>
              <input type="text" name="userName" value={formData.userName} placeholder="이름을 입력해주세요." onChange={handleChange} />
              <label>생년월일</label>
              <input type="text" name="birthDate" value={formData.birthDate} placeholder="생년월일을 입력해주세요." onChange={handleChange} />
              <p>전화번호, 이메일 등은 알아서 만드삼</p>
              <button type="submit">확인</button>
            </form>
          </div>
        </div>
              )}
              </div>
            );
          }
          export default RegisterPage;