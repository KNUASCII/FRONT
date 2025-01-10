import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [phone, setPhone] = useState('');
    const [university, setUniversity] = useState('');
    const [studentId, setStudentId] = useState('');
    const [department, setDepartment] = useState('');
    const [grade, setGrade] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(null);

    useEffect(() => {
        if (password && passwordCheck) {
            setIsPasswordMatch(password === passwordCheck);
        } else {
            setIsPasswordMatch(null);
        }
    }, [password, passwordCheck]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password.length < 8 || password !== passwordCheck) {
            alert('비밀번호가 8자 이상이어야 하며, 비밀번호 확인이 일치해야 합니다.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                userID,
                password,
                userName,
                userAge,
                phone,
                university,
                studentId,
                department,
                grade,
            })
        } catch (error) {
            console.error(error.response.data.message);
        }
    }

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="아이디" value={userID} required onChange={(e) => setUserID(e.target.value)} />
                <input type="password" placeholder="비밀번호" value={password} required onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="비밀번호 확인" value={passwordCheck} required onChange={(e) => setPasswordCheck(e.target.value)} />
                {isPasswordMatch === null ? '' : isPasswordMatch ? '✅' : '❌'}
                <input type="text" placeholder="이름" value={userName} required onChange={(e) => setUserName(e.target.value)} />
                <input type="text" placeholder="나이" value={userAge} required onChange={(e) => setUserAge(e.target.value)} />
                <input type="text" placeholder="전화번호" value={phone} required onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder="대학교" value={university} required onChange={(e) => setUniversity(e.target.value)} />
                <input type="text" placeholder="학번" value={studentId} required onChange={(e) => setStudentId(e.target.value)} />
                <input type="text" placeholder="학과" value={department} required onChange={(e) => setDepartment(e.target.value)} />
                <input type="text" placeholder="학년" value={grade} required onChange={(e) => setGrade(e.target.value)} />
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default Register;