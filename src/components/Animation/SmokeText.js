import React from 'react'
import smoke from '../../video/smoke.mp4';

const SmokeText = () => {

  const reload = () => {
    window.location.reload();
  }
 
  return (
    <div className="smokeText">
      <video src={smoke} autoPlay muted />
      <h1 onClick={reload}>
        <span>Y</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span>w</span>
        <span>-</span>
        <span>W</span>
        <span>e</span>
        <span>b</span>
        <span>s</span>
        <span>i</span>
        <span>t</span>
        <span>e</span>
      </h1>
      <p onClick={reload}>Refress to see the effect</p>
    </div>
  )
}

export default SmokeText
