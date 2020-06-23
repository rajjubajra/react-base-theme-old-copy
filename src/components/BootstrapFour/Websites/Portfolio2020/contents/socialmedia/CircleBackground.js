import React from 'react'

function CircleBackground() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "0px",
    }}>
      <div style={{
        width: "100px",
        height: "100px",
        borderRadius: "200px",
        border: "2px solid #ccc",
        position: "relative",
        right: "27%",
        animation: "fadeInLoop 6s linear infinite",
        zIndex: "-10"

      }}></div>
      <div style={{
        width: "100px",
        height: "100px",
        borderRadius: "200px",
        border: "2px solid #ccc",
        position: "relative",
        top: "-15%",
        right: "27%",
        animation: "fadeInLoop 6s linear infinite",
        animationDelay: "2s",
        zIndex: "-10"
      }}></div>
      <div style={{
        width: "100px",
        height: "100px",
        borderRadius: "200px",
        border: "2px solid #ccc",
        position: "relative",
        top: "15%",
        right: "20%",
        animation: "fadeInLoop 8s linear infinite",
        animationDelay: "2.5s",
        zIndex: "-10",
      }}></div>
    </div>
  )
}

export default CircleBackground
