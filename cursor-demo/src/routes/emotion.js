//감정 작성 화면

import React, { useState } from 'react';
import axios from 'axios';

const Emotion = () => {
    const [emotion, setEmotion] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(emotion);

        try {
            const response = await axios.post('http://localhost:8080/api/emotion', { emotion });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>오늘 하루 느낀 감정을 간단히 작성해주세요</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                style={{width: '500px', height: '300px'}} 
                placeholder="감정을 작성해주세요" 
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}
                required
                />
                <button type="submit">작성</button>
            </form>
        </div>
    )
}

export default Emotion;