import React, { useEffect, useState, useRef } from 'react'


const navView = {
  display: "block",
  width: '100%',
  height: '100px',
  background: '#ccc'
}

const navHide = {
  display: 'none'
}

function OnScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navScroll, setNavScroll] = useState(false);



  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }

      setScrollPosition(window.scrollY);
      console.log(window.scrollY);

    }, [])
  })




  return (
    <div>
      <h1>Scroll Position: {scrollPosition}</h1>
      <nav className={navScroll ? 'none' : 'block'}>Navigtion !!!</nav>



    </div>
  )
}

export default OnScrollPosition
