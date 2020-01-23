import React, { useState, useEffect } from 'react'

const dummyText = [
  {
    id: 1,
    title: "Our Customers' Fevourites",
    brief: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore pariatur illum numquam necessitatibus voluptatem tempora nemo perspiciatis voluptatum nobis voluptates. Saepe esse dolore at id rem labore repellat, maxime expedita",
    nav_one: "Services",
    nav_two: "About us"
  }
]

const HeroWheat = (props) => {
  const [title, setTitle] = useState();
  const [brief, setBrief] = useState();
  const [navOne, setNavOne] = useState();
  const [navTwo, setNavTwo] = useState();

  useEffect(() => {

    setTitle(dummyText[0].title);
    setBrief(dummyText[0].brief);
    setNavOne(dummyText[0].nav_one);
    setNavTwo(dummyText[0].nav_two);

  }, [title, brief, navOne, navTwo])

  return (
    <>
      <div className={`herowheat`}>
        <div className="main">
          <h1>{title}</h1>
          <p>{brief}</p>
          <div className="buttons">
            <button className="btn-small-wide">{navOne}</button>
            <button className="btn-small-wide">{navTwo}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroWheat
