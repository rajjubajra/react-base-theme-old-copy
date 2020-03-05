import React from 'react'
import B2Review from './B2Review';
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

];

const profile = jsonObject.map(item => {
  return <B2Review name={item.name} info={item.info} key={uuid()} />
})

const B2Reviews = () => {
  return (
    <>
      <div className="ref">B2Reviews.js and B2Review.js</div>
      <h2>B2Reviews</h2>
      <div className="b2reviews">
        {profile}
      </div>
    </>
  )
}

export default B2Reviews;