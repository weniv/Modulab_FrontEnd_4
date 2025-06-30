import Menu from './components/Menu';
import Contents from './components/Contents';

function App() {
  
  const userLogin = false; // 로그인 상태를 나타내는 변수

  return (
    <>
      <Menu
        userLogin={userLogin}
      />
      <Contents />
    </>
  )
}

export default App
