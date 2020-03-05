import React from 'react'
import B3Card from './B3Card';
import img1 from './../../images/b3card-1.jpg';
//import img2 from './../../images/b3card-2.jpg';
//import img3 from './../../images/b3card-3.jpg';
import uuid from 'uuid/v1';

const jsonObject = [
  {
    title: "Workshop",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores esse laboriosam voluptatem tempore exercitationem. Et aperiam similique ratione ex quisquam at iure in qui voluptates sunt sed ipsam, commodi quas.",
    image: "img1"
  },

  {
    title: "Development",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores esse laboriosam voluptatem tempore exercitationem. Et aperiam similique ratione ex quisquam at iure in qui voluptates sunt sed ipsam, commodi quas.",
    image: "img2"
  },

  {
    title: "Team",
    text: "Dolores esse laboriosam voluptatem tempore exercitationem. Et aperiam similique ratione",
    image: "img3"
  }
]

const cards = jsonObject.map(item => {
  return <B3Card title={item.title} text={item.text} img={img1} key={uuid()} />
})



const B3Cards = () => {
  return (
    <>
      <div className="ref">b3cards.js and b3card.js</div>
      <div className="b3cards">
        <h2>B3Cards</h2>
        <div className="cards">
          {cards}
        </div>

      </div>
    </>
  )
}

export default B3Cards
