function Menu({ userLogin, currentMenu, setCurrentMenu }) {

  function currentMenuHandler(e) {
    console.log('Current menu clicked');
    console.log('Menu item:', e.target.textContent);
    setCurrentMenu(e.target.textContent);
  }

  return (
    <nav>
      <ul>
        <li 
          onClick={currentMenuHandler}
          style={{ color: currentMenu === 'About' ? 'blue' : 'black' }}
        >About</li>
        <li 
          onClick={currentMenuHandler}
          style={{ color: currentMenu === 'Contact' ? 'blue' : 'black' }}
        >Contact</li>
        <li 
          onClick={currentMenuHandler}
          style={{ color: currentMenu === 'Services' ? 'blue' : 'black' }}
        >Services</li>
        <li 
          onClick={currentMenuHandler}
          style={{ color: currentMenu === 'Portfolio' ? 'blue' : 'black' }}
        >Portfolio</li>
        {
          userLogin ? 
            <li 
              onClick={currentMenuHandler}
              style={{ color: currentMenu === 'Profile' ? 'blue' : 'black' }}
            >Profile</li> : <li 
              onClick={currentMenuHandler}
              style={{ color: currentMenu === 'Login' ? 'blue' : 'black' }}
            >Login</li>
        }
      </ul>
    </nav>
  );
}

export default Menu;