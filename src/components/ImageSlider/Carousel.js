import React, { useState, useEffect } from 'react'

const images = [
  {
    id: 1,
    img: 'slider_purchase',
    desc: 'Image Zero One',
  },
  {
    id: 2,
    img: 'slider_rock',
    desc: 'Image Zero two',
  },
  {
    id: 3,
    img: 'slider_team',
    desc: 'Image Zero three',
  },
  {
    id: 4,
    img: 'slider_learn',
    desc: 'Image Zero four',
  },
  {
    id: 5,
    img: 'slider_rock',
    desc: 'Image Zero five',
  }
]

const Carousel = () => {

  const [imageKey, setImageKey] = useState(0);/** slide interval time imageKey */
  const [totalItems, setTotalItems] = useState(0);/** length of image data array */
  const [items] = useState(document.getElementsByClassName('carousel-photo'));


  useEffect(() => {

    setTotalItems(items.length - 1); /** total length of Image data */


    // console.log('ITEMS?', items, totalItems);
    // console.log('imageKey', imageKey);

    /** dyanically add show / hide className as per setInterval time */
    items[imageKey].classList.add('show');
    items[imageKey].classList.remove('hide');
    items[imageKey === 0 ? totalItems : imageKey - 1].classList.remove('show');
    items[imageKey === 0 ? totalItems : imageKey - 1].classList.add('hide');

    /** SetInterval for slide "show / hide" */
    const interval = setInterval(() => {
      setImageKey(
        imageKey => imageKey >= totalItems ? 0 : imageKey + 1)
    }, 6000);
    return () => clearInterval(interval);


  }, [imageKey, items, totalItems])





  /** Go to Next Image */
  function nextImage() {
    if (imageKey >= totalItems || imageKey === undefined) {
      setImageKey(0)
    } else {
      setImageKey(imageKey + 1);
    }
  }
  /** Go to prev Image */
  function prevImage() {
    /** remove show from current key and activate prev key */
    items[imageKey].classList.remove('show');
    setImageKey(imageKey === 0 ? totalItems : imageKey - 1);
  }






  return (
    <>
      <div className="ref">Carousel.js</div>
      <h1>Carousel {imageKey} - {imageKey === 0 ? 1 : imageKey - 1}</h1>
      <div className="carousel">
        <div className="carousel-images">
          {images.map(item => {
            return <img key={item.id}
              className={`carousel-photo ${item.id === 1 ? 'show' : 'hide'}`}
              src={require(`../../images/${item.img}.jpg`)}
              alt="carousel_photo" />
          })}
          <div className="slideDotNav">
            <ul>
              {
                images.map(item => {
                  return <li
                    key={item.id}
                    className={`dot ${imageKey === item.id - 1 ? 'active' : ''}`}
                    onClick={() => setImageKey(item.id - 1)}
                  ></li>
                })
              }
            </ul>

          </div>
          <div className="next" onClick={nextImage}></div>
          <div className="prev" onClick={prevImage}></div>
        </div>
      </div>
    </>
  )
}

export default Carousel
