function App() {
  const value = true;
  // 조건부 렌더링
  return (
    <>
      {value?'hello':'world'}
    </>
  )
}

export default App
