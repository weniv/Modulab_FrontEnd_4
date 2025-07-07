import { useState } from "react";

function Test() {
    const [count, setCount] = useState(0);

    function increment() {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);

    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <>
            <h2>Counter : {count} </h2>
            <button onClick={increment}>+1 증가</button>
            <button onClick={decrement}>-1 감소</button>
        </>
    );
}

export default Test;