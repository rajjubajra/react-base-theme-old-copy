import React from 'react'


const dummyText = [
  {
    id: 1,
    image: 'rsz_cupcake-44',
    header: 'Tmquam Gecessitat',
    title: "Our Customers' Fevourites",
    brief: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore pariatur illum numquam necessitatibus voluptatem tempora nemo perspiciatis voluptatum nobis voluptates. Saepe esse dolore at id rem labore repellat, maxime expedita",
    nav: "Services",
  }
]


const HeroWheatTwo = () => {
  return (
    <>
      <div className="ref">HeroWheatTwo.js</div>
      <div className="herowheattwo">
        <div className="wrapper">
          <div>
            <img src={require(`../../images/wheat/${dummyText[0].image}.jpg`)} alt='hero' />
          </div>
          <div>
            <div className="header">{dummyText[0].header}</div>
            <h1>{dummyText[0].title}</h1>
            <p>{dummyText[0].brief}</p>
            <div className="button">
              <button className="btn-small-wide">{dummyText[0].nav}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroWheatTwo
