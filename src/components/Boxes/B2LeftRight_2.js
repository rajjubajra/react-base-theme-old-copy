import React from 'react'
import person1 from '../../images/person-1.jpg';
import person2 from '../../images/person-2.jpg';
import person3 from '../../images/person-3.jpg';

const B2LeftRight_2 = ({name, info, img}) => {
  return (
    <div className="b2leftright-2">

      <div className="person"><img src={person1} alt="person-image" /></div>
      <div className="text">
      <h2>{name}</h2>
        <p>{info}</p>
      </div>
    </div>
  )
}

export default B2LeftRight_2
