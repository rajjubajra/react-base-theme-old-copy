import React from 'react'

function Title(props) {
  return (
    <h1 class="text-uppercase pt-5">
      <span></span>
      <span>{props.title}</span>
      <span></span>
    </h1>
  )
}

export default Title
