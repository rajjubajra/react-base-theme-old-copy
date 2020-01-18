import React, { useState, useEffect, Fragment } from 'react'


const images_text = [
  {
    id: 1,
    img: 'slider_purchase',
    title: 'Title One',
    desc: 'Image Zero One',
  },
  {
    id: 2,
    img: 'slider_rock',
    title: 'Title Two',
    desc: 'Image Zero two',
  },
  {
    id: 3,
    img: 'slider_team',
    title: 'Title Three',
    desc: 'Image Zero three',
  },
  {
    id: 4,
    img: 'slider_learn',
    title: 'Title Four',
    desc: 'Image Zero four',
  },
  {
    id: 5,
    img: 'slider_rock',
    title: 'Title Five',
    desc: 'Image Zero five',
  }
]



const CarasouelWithText = () => {
  const [slideImages] = useState(document.getElementsByClassName('slide-image'));
  const [slideText] = useState(document.getElementsByClassName('slide-text'));
  const [slideItems] = useState(document.getElementsByClassName('slide-item'));
  const [slideLength, setSlideLength] = useState(0);
  const [loopId, setLoopId] = useState(0);


  /** SET LOOPS */
  useEffect(() => {

    //get lenth of the array
    setSlideLength(slideImages.length - 1);

    const interval = setInterval(() => {
      setLoopId(loopId => loopId < slideLength ? loopId + 1 : 0)
    }, 4000)
    return () => clearInterval(interval);


  }, [loopId, slideImages, slideLength, slideText])


  /** DYANMICALLY CHANGE CSS CLASS FOR SHOW HIDE */
  useEffect(() => {

    /**current slide */
    slideItems[loopId].classList.add('show');
    slideItems[loopId].classList.remove('hide');

    /** prev and after slide */
    slideItems[loopId === 0 ? slideLength : loopId - 1].classList.remove('show');
    slideItems[loopId === 0 ? slideLength : loopId - 1].classList.add('hide');

  }, [loopId, slideItems, slideLength])


  function nextSlide() {
    if (loopId === slideLength) {
      setLoopId(0)
    } else {
      setLoopId(loopId + 1);
    }
  }

  function prevSlide() {
    if (loopId === 0) {
      setLoopId(slideLength);
      slideItems[loopId].classList.remove('show');
      slideItems[loopId].classList.add('hide');
    } else {
      slideItems[loopId].classList.remove('show');
      slideItems[loopId].classList.add('hide');
      setLoopId(loopId - 1);
    }
  }

  function navDotValue(id) {
    setLoopId(id);
    slideItems[loopId].classList.remove('show');
    slideItems[loopId].classList.add('hide');
  }


  // console.log('loopid', loopId);
  // console.log('slide image', slideImages);
  // console.log('slide text', slideText);
  // console.log('slide Lenght', slideLength);
  // console.log('slide item', slideItems);


  return (
    <>
      <div className="ref">CarouselWithText.js</div>
      <h1>Carousel with Text</h1>
      <div className="carouselwithtext">
        <div className="wrapper">
          {
            images_text.map((item) => {
              return (
                <Fragment key={item.id}>
                  <div className={`slide-item ${item.id === 1 ? 'show' : 'hide'}`} >
                    <img
                      className="slide-image"
                      src={require(`../../images/${item.img}.jpg`)}
                      alt="slide" />
                    <div className="slide-text">
                      <h2 className="title">{item.title}</h2>
                      <p className="desc">{item.desc}</p>
                    </div>
                  </div>
                </Fragment>
              )
            })
          }
          < div className="dot-nav">
            {
              images_text.map(item => {
                return <div key={item.id}
                  onClick={() => navDotValue(item.id - 1)}
                  className={`dot ${item.id - 1 === loopId ? 'active' : ''}`}>
                </div>

              })
            }
          </div>
          <div className="next-prev">
            <div className="next" onClick={nextSlide}></div>
            <div className="prev" onClick={prevSlide}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarasouelWithText
