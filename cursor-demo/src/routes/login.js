import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', formData);
      localStorage.setItem('token', response.data.token); 
      console.log("로그인 성공!")
      navigate('/dashboard');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <input
        type="text"
        name="userID"
        placeholder="아이디"
        value={formData.userID}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
