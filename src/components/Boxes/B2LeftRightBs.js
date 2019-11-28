import React from 'react'
import B2LeftRightB from './B2LeftRightB';
import uuid from 'uuid/v1';


const jsonObject = [
  {
    name: "John Denver", 
    info: "Orem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab pariatur? Architecto quos consequuntur alias cum.",
    img: "1"
  },
  {
    name: "Max Colline", 
    info: "Amet consectetur Nesciunt, adipisicing elit. Pariatur? Architecto quos consequuntur alias cum.",
    img: "2"
  },
  {
    name: "Haribol Batt", 
    info: "Nesciunt, ab pariatur? Architecto quos consequuntur. Orem ipsum dolor amet consectetur adipisicing elit alias cum.",
    img: "3"
  }
  
];

const profile = jsonObject.map( item => {
  return <B2LeftRightB name={item.name} info={item.info} img={item.img} key={uuid()} />
})

const B2LeftRightBs = () => {
  return (
    <div>
      {profile}
    </div>
  )
}

export default B2LeftRightBs
