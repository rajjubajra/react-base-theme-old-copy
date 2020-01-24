import React, { useState } from 'react'

const images = [
  {
    id: 1,
    img: 'rsz_bread-36',
  },
  {
    id: 2,
    img: 'rsz_cake-44',
  },
  {
    id: 3,
    img: 'rsz_cupcake-44',
  },
  {
    id: 4,
    img: 'rsz_kitchen-11',
  }
]

const ScrollOnClick = () => {
  const [transitionPoint, setTransitionPoint] = useState(-272);


  return (
    <>
      <div className="scrollonclick">

        <div className="slide-view-area">

          <div style={{ transform: `translate(${transitionPoint}px, 0px)` }}>
            <img src={require(`../../../images/wheat/${images[3].img}.jpg`)} alt="slide-last" />
          </div>
          {
            images.map(item => {
              return <div key={item.id} style={{ transform: `translate(${transitionPoint}px, 0px)` }} >
                <img src={require(`../../../images/wheat/${item.img}.jpg`)} alt="slides" />
              </div>
            })
          }
          <div style={{ transform: `translate(${transitionPoint}px, 0px)` }}>
            <img src={require(`../../../images/wheat/${images[0].img}.jpg`)} alt="slide-first" />
          </div>
        </div>
        <div className="nav-button-area">
          <ul>
            <li className={transitionPoint === -272 ? 'active' : ''}
              onClick={() => setTransitionPoint(-272)}>1</li>
            <li className={transitionPoint === -682 ? 'active' : ''}
              onClick={() => setTransitionPoint(-682)}>2</li>
            <li className={transitionPoint === -1092 ? 'active' : ''}
              onClick={() => setTransitionPoint(-1092)}>3</li>
            <li className={transitionPoint === -1502 ? 'active' : ''}
              onClick={() => setTransitionPoint(-1502)}>4</li>
          </ul>
        </div>
        <div className="next-prev">
          <div className={`next ${transitionPoint <= -1502 ? 'inactive' : ''}`} onClick={() => setTransitionPoint(
            transitionPoint <= -1502
              ? -1502
              : transitionPoint - 410)}></div>
          <div className={`prev ${transitionPoint >= -272 ? 'inactive' : ''}`} onClick={() => setTransitionPoint(
            transitionPoint >= -272
              ? -272
              : transitionPoint + 410)}></div>
        </div>

      </div>
    </>
  )
}

export default ScrollOnClick
