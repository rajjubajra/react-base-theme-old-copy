import React, { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

function IntersectionObserver() {

  const [ref, inView, entry] = useInView({ rootMargin: '-300px 0px', })


  console.log("ref: ", ref, "inview: ", inView, "entry: ", entry);
  return (
    <div style={{ height: "1600px", position: 'relative' }}>
      <h1>Inter-section Observer</h1>
      <div style={{ height: "100vh" }}></div>

      <div ref={ref}>
        <h2>{
          inView ? ' [ InSide the InVeiw ] ' : ' - Ouside the InView - '
        }</h2>
      </div>

    </div>
  )
}

export default IntersectionObserver
