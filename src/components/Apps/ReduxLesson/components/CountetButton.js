import React from 'react'


const CountetButton = (props) => {
  return (
    <div>
      <button
        className="btn-small-wide"
        onClick={() => props.counterIncrement(1)} >
        Increment
      </button>
      <button className="btn-small-wide"
        onClick={() => props.counterDecrement(1)}>
        Decrement
      </button>
    </div>
  )
}
export default CountetButton