import { useState, useRef } from "react";

export default function Stopwatch() {
    // 시작한 시간
    const startTime = useRef(0);
    // 현재 시간 
    // const [now, setNow] = useState(null);
    const [secondsPassed, setSecondsPassed] = useState(0);

    // 인터벌함수의 id
    const intervalId = useRef(null);


    function handleStart() {
        // 10시 10분 5초 --> 시작버튼
        // 10시 10분 15초 --> 스탑버튼
        // 30초가 흐른 후 : 10시 10분 45초
        // 10시 10분 45초 --> 시작버튼

        // 10시 10분 35초

        startTime.current = Date.now() - secondsPassed;

        intervalId.current = setInterval(() => {
            setSecondsPassed((Date.now() - startTime.current)); // 기본 단위가 밀리세컨드이기 때문에 초단위로 표현하기 위해서 1000을 나눕니다.
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalId.current);
    }

    function handleReset() {
        setSecondsPassed(0);
        clearInterval(intervalId.current);
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3) / 1000}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>reset</button>
        </>
    );
}
