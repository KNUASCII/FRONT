//다이어리 조회
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './diarylog.css';

function Diarylog() {
    const [diaryData, setDiaryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/diary/userDiary', {
                    withCredentials: true  // 쿠키 전송을 위해 추가
                });
                if (response.data && Array.isArray(response.data)) {
                    setDiaryData(response.data);
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
            {diaryData.map((diary, index) => (
                <div
                    className={`page ${index === currentPage ? 'active' : 'inactive'}`}
                    key={diary.id}
                >
                    <div className="content">
                        <h2>{diary.title}</h2>
                        <p>{diary.content}</p>
                        <p className="date">{new Date(diary.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="navigation">
                        {currentPage > 0 && (
                            <button onClick={prevPage} className="arrow left">이전</button>
                        )}
                        {currentPage < diaryData.length - 1 && (
                            <button onClick={nextPage} className="arrow right">다음</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Diarylog;