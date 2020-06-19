import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import './useSticky.scss';

function Header() {

  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener('wheel', function (event) {
      if (event.deltaY < 0) {
        //console.log('scrolling Down', event.deltaY);
        setScrollDown(true)
        //document.getElementById('status').textContent = 'scrolling up';
      }
      else if (event.deltaY > 0) {
        // console.log('scrolling up', event.deltaY);
        //document.getElementById('status').textContent = 'scrolling down';
        setScrollDown(false);
      }
    });
  }, [])


  return (
    <header className="header_area">
      <div className="main-menu">
        <NavigationBar css_class={scrollDown ? 'fixed-nav' : 'float-nav'} />
      </div>
    </header>
  )
}

export default Header
