import './App.css'


const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

function hojun() {
  return 100
}

function App() {
  // 주석 사용!
  /* 주석 사용! */
  const name = 'React'
  const age = 10
  const arr = [1, 2, 3, 4, 5]

  return (
    <>
      {/* JSX 문법 안에 주석 */}
      <p className='one'>hello world</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{age + age}</p>
      <p>{arr}</p>
      <p>{arr[0]}</p>
      {/* 배열은 자동으로 문자열로 변환됨 */}
      <p>{arr.map((item) => item * 2)}</p>
      <p>{true? <span>true</span> : <span>false</span>}</p>
      <p>{hojun()}</p>
      {list.map((item) => (
        <div className='list-item' key={item.no}>
          {
          item.visited ? 
            <p className='area visited'>{item.area}</p> : 
            <p className='area'>{item.area}</p>
          }
        </div>
      ))}
    </>
  )
}

export default App
