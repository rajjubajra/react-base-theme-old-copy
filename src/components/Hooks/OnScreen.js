import React, { useRef, useEffect, useState } from 'react'



function OnScreen() {
  // Ref for the element that we want to detect whether on screen
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const on_Screen = useOnScreen(ref, '-300px');

  // Hook
  function useOnScreen(ref, rootMargin = '0px') {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
  }


  //console.log("ref", ref);


  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: on_Screen ? '#23cebd' : '#efefef'
        }}
      >
        {on_Screen ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
            <h1>Scroll down 300px from the top of this section 👇</h1>
          )}
      </div>
    </div>
  )
}

export default OnScreen
