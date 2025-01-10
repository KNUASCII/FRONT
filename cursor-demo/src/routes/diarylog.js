//다이어리 조회
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './diarylog.css';

function Diarylog() {
    const [diaryData, setDiaryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert("로그인이 필요합니다.");
                window.location.href = '/login';
                return;
            }
            try {
                const response = await axios.get('http://localhost:8080/api/diary/getDiary', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data && Array.isArray(response.data.diaries)) {
                    setDiaryData(response.data.diaries);
                }
            } catch (e) {
                console.error("서버 연결 실패!", e);
                alert("다이어리를 불러오는데 실패했습니다.");
            }
        };
        fetchData();
    }, []);

    const nextPage = () => {
        if (currentPage < diaryData.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (diaryData.length === 0) {
        return <div className="book">작성된 다이어리가 없습니다.</div>;
    }

    return (
        <div className="book">
            <div className="page active">
                <div className="content">
                    <h2>{new Date(diaryData[currentPage].diaryDate).toLocaleDateString()}</h2>
                    <p>{diaryData[currentPage].diaryText}</p>
                    <p className="emotion">감정 분석: {JSON.parse(diaryData[currentPage].emotionData).emotionAnalysis}</p>
                    
                    
                </div>  
                
            </div>
            <button onClick={prevPage} className="arrow left">이전</button>
            <button onClick={nextPage} className="arrow right">다음</button>
        </div>
        
    );
}

export default Diarylog;