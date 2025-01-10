//감정 작성 화면

import React, { useState } from 'react';
import axios from 'axios';

const Newdiary = () => {
    const [diaryText, setdiaryText] = useState('');
    const [counselResult, setCounselResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log();

        try {
            console.log(diaryText);
            const response = await axios.post('http://localhost:8080/api/diary/newDiary', { diaryText });
            console.log(response.data);
            setCounselResult(response.data);
            setdiaryText('');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>오늘 하루 느낀 감정을 간단히 작성해주세요</h1>
            {!counselResult && (
                <form onSubmit={handleSubmit}>
                    <textarea 
                    style={{width: '500px', height: '300px', resize: 'none'}}
                    placeholder="감정을 작성해주세요" 
                    value={diaryText}
                    onChange={(e) => setdiaryText(e.target.value)}
                    required
                    />
                    <button type="submit">작성</button>
                </form>
            )}
            {counselResult && (
                <div>
                    <h2>상담 결과:</h2>
                    <p>{counselResult}</p>
                </div>
            )} 
        </div>
    )
}

export default Newdiary;