import React, { useState, useEffect } from 'react'



const images = [
  {
    id: 1,
    img: 'slider_purchase',
    desc: 'Image Zero One',
    css: 'fadeIn'
  },
  {
    id: 2,
    img: 'slider_rock',
    desc: 'Image Zero two',
    css: 'fadeIn'
  },
  {
    id: 3,
    img: 'slider_team',
    desc: 'Image Zero three',
    css: 'fadeIn1'
  },
  {
    id: 4,
    img: 'slider_learn',
    desc: 'Image Zero four',
    css: 'fadeIn'
  },
  {
    id: 5,
    img: 'slider_rock',
    desc: 'Image Zero five',
    css: 'fadeIn1'
  }
]



const Carousel = () => {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const itemClassName = 'carousel-photo';
    const items = document.getElementsByClassName(itemClassName);
    const totalItems = items.length;
    let slide = 0;
    let moving = true;

    console.log('ITEMS?', items, totalItems);

    setInterval(() => {
      const interval = setInterval(() => {
        setSeconds(
          seconds => seconds >= totalItems ? 0 : seconds + 1)
      }, 6000);
      return () => clearInterval(interval);
    }, 3000);

    console.log('seconds', seconds);

    //set classes
    function setInitialClasses() {
      //target prev, curr and next items
      // this assumes there are at least three items
      items[totalItems - 1].classList.add('prev');
      items[0].classList.add("active");
      items[1].classList.add("next");
    }

    //set event listener
    function setEventListeners() {
      let next = document.getElementsByClassName('next')[0];
      let prev = document.getElementsByClassName('prev')[0];

      next.addEventListener('click', moveNext);
      prev.addEventListener('click', movePrev);
    }


    //next navigation handler
    function moveNext() {
      //check moving
      if (!moving) {
        //if it is the last slide reset to 0 else +1
        if (slide === (totalItems - 1)) {
          slide = 0;
        } else {
          slide++;
        }
        //Move carousel to update slide
        // moveCarouselTo(slide);
      }
    }


    //prev navigation handler
    function movePrev() {
      //check if moving
      if (!moving) {
        //if it is a first slide, set as last slide, else -1
        if (slide === 0) {
          slide = (totalItems = 1);
        } else {
          slide--;
        }
        //move carousel to update slide
        //moveCarouselTo(slide);
      }
    }


    // function disableInteraction() {
    //   //set moving to true for the same duration as our transition
    //   //(0.5s = 500ms)
    //   moving = true;

    //   //setTimeout runs its function one after the given time
    //   setTimeout(function () {
    //     moving = false
    //   }, 500)
    // }

    // function moveCarouselTo(slide) {
    //   //check carousel is moving, if not allow interaction
    //   if (!moving) {
    //     //temporarily disable interaction
    //     disableInteraction();

    //     //update the 'old' adjacent with 'new' ones
    //     var newPreviouse = slide - 1,
    //       newNext = slide + 1,
    //       oldPreviouse = slide - 2,
    //       oldNext = slide + 2;

    //     //test carousel has more than three items
    //     if ((totalItems - 1) > 3) {
    //       //check and update if the new slide are out of the bounds
    //       if (newPreviouse <= 0) {
    //         oldPreviouse = (totalItems - 1)
    //       } else if (newNext >= (totalItems - 1)) {
    //         oldNext = 0;
    //       }

    //       //checks and updates if the slide is at the beginning/end
    //       if (slide === 0) {
    //         newPreviouse = (totalItems - 1);
    //         oldPreviouse = (totalItems - 2);
    //         oldNext = (slide + 1);
    //       } else if (slide === (totalItems - 1)) {
    //         newPreviouse = (slide + 1);
    //         newNext = 0;
    //         oldNext = 1;
    //       }

    //       //now we have worked out where we are where we are going,
    //       //by adding/removing classes we will triger the transaction

    //       //reset old next/prev element to default classes
    //       items[oldPreviouse].className = itemClassName;
    //       items[slide].className = itemClassName + " active";
    //       items[newNext].className = itemClassName + " next";
    //     }
    //   }
    // }

    // function initCarousel() {
    //   setInitialClasses();
    //   setEventListeners();

    //   //set moving to false so the carousel become interactive
    //   moving = false;

    // }

    // //make it run
    // initCarousel();

  }, [])






  return (
    <>
      <div className="ref">Carousel.js</div>
      <h1>Carousel</h1>
      <div className="carousel">
        <div className="carousel-images">
          {images.map(item => {
            return <img key={item.id}
              className={`carousel-photo ${item.id === 1 ? 'initial' : ''}`}
              src={require(`../../images/${item.img}.jpg`)}
              alt="carousel_photo" />
          })}
          <div className="next" ></div>
          <div className="prev" ></div>
        </div>
      </div>
    </>
  )
}

export default Carousel
