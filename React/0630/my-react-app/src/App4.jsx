function App() {
// 왜 React에서는 map을 자주 사용해서 반복해서 컴포넌트들을 만드는가?
// 중괄호 안에서 특수기호들이 생략되고 안에 있는 요소들의 연결로만 표시되기 때문입니다.
  return (
    <>
      {[1, 2, 3].map(v => v**2)}
    </>
  )
}

export default App
