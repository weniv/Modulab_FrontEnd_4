import React from 'react';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Services from './Services';

function Contents({ currentMenu }) {

  if (currentMenu === 'About') {
    return <About />;
  }
  else if (currentMenu === 'Contact') {
    return <Contact />;
  }
  else if (currentMenu === 'Portfolio') {
    return <Portfolio />;
  }
  else if (currentMenu === 'Profile') {
    return <Profile />;
  }
  else if (currentMenu === 'Services') {
    return <Services />;
  }
  else {
    return <About />;
  }
}
export default Contents;