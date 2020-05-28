import React from 'react'


const btnStyle = {
  border: '0px',
  backgroundColor: '#fff',
  margin: '0px 20px',
  outline: '0px'
}

function Button(props) {
  return (
    <button style={btnStyle} type="button" class="active" id="btn1" data-filter={props.datafilter}>
      {props.name}
    </button>
  )
}

export default Button
