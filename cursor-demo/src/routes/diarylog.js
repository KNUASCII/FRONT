//다이어리 조회
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Diarylog() {
    const [diaryData, setDiaryData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/diary/userDiary');
                setDiaryData(response.data);
            } catch (e) {
                console.error("서버 연결 실패!");
            }
        };
        fetchData();
    }, []);

    return <div>
        {diaryData && diaryData.map((diary) => (
            <div key={diary.id}>
                <h2>{diary.title}</h2>
                <p>{diary.content}</p>
            </div>
        ))}
    </div>
}

export default Diarylog;