import React, { useState } from 'react';
import Menu from './components/Menu2';
import Contents from './components/Contents2';

function App() {

  const [currentMenu, setCurrentMenu] = useState('');
  
  const userLogin = false; // 로그인 상태를 나타내는 변수

  return (
    <>
      <Menu
        userLogin={userLogin}
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />
      <Contents currentMenu={currentMenu} />
    </>
  )
}

export default App
