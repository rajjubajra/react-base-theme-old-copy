import React from 'react';


const Buttons = (props) => {
  return (
    <div className="promo-block">
      <div className="btn-small-wide" onClick={() => window.open(props.uri)}>{props.title}</div>
    </div>
  )
}

export default Buttons
