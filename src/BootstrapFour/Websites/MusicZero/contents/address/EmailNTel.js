import React from 'react'



const bigFont = {
  fontSize: "2rem",
  letterSpacing: "0.2rem"
}

function EmailNTel() {
  return (
    <div className="mt-5">
      <ul style={bigFont}>
        <li>email@example.com</li>
        <li>(444) 5555-5555</li>
      </ul>
    </div>
  )
}

export default EmailNTel
