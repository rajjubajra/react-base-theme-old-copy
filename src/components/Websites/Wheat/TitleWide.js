import React from 'react'

const TitleWide = (props) => {
  return (
    <div className="title-wide">
      <h1>{props.title}</h1>
      <img src={require(`../../../images/wheat/${props.backgroundImage}.jpg`)} alt="background" />
    </div>
  )
}

export default TitleWide
