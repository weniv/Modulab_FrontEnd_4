import { useState } from 'react'

function createCounter(){
  // 이 함수는 useState와 비교하기 위한 함수입니다.
  // 함수 내에 변수가 있고, 변수를 변경할 수 있는 함수를 만들어 return합니다.
  // 이 안에서 count를 useState로 변경하면 CreateCounter도 훅처럼 동작합니다.
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
    // 이렇게 하면 일반 함수의 count는 증가하지 않지만
    // useState의 update는 증가합니다.
    counter.increment();
    setUpdate(update + 1);
    // 결론을 말씀 드리자면 React Hook은 React의 렌더링 flow에서 관리를 하게 됩니다.
    // 일반 함수의 변수는 React의 렌더링 flow와는 관계가 없기 때문에 초기화가 되는 것입니다.
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
