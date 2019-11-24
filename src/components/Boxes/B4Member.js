import React from 'react'
import { ReactComponent as FemaleAvatar } from '../../images/female_avatar.svg';

const B4Member = ({title, text}) => {

  return (
    <div className="b4member">
      <div className="image"><FemaleAvatar /></div>
      <div className="title"><h3>{title}</h3></div>
      <div className="text"><p>{text}</p></div>
    </div>
  )
}

export default B4Member
