import { useState } from 'react'

// 훅 Vs 일반함수
function createCounter(){
  let count = 0;

  function increment() {
    count += 1;
    console.log(`일반 함수 Count: ${count}`);
    return count;
  }

  return {count, increment};
}

function App() {
  const [update, setUpdate] = useState(0);
  const counter = createCounter();

  function handleClick() {
    counter.increment();
    setUpdate(update + 1);
  }


  return (
    <>
      <h1>My Hook App</h1>
      <p>일반 함수 count: {counter.count}</p>
      <p>useState count: {update}</p>
      <button onClick={handleClick}>클릭해주세요!</button>
    </>
  )
}

export default App
