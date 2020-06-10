import React from 'react';
import './MultiCarousel.scss';

function MultiCarousel() {
  return (
    // {< !--Carousel Wrapper-- >}
    <div id="multi-item-example" class="carousel slide carousel-multi-item carousel-multi-item-2" data-ride="carousel">

      {/* <!--Controls--> */}
      <div class="controls-top">
        <a class="black-text" href="#multi-item-example" data-slide="prev"><i class="fas fa-angle-left fa-3x pr-3">000</i></a>
        <a class="black-text" href="#multi-item-example" data-slide="next"><i class="fas fa-angle-right fa-3x pl-3">aaaa</i></a>
      </div>
      {/* <!--/.Controls--> */}

      {/* <!--Slides--> */}
      <div class="carousel-inner" role="listbox">

        {/* <!--First slide--> */}
        <div class="carousel-item active">

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
                alt="Card cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"
                alt="Card cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
                alt="Card cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
                alt="Card  cap" />
            </div>
          </div>

        </div>
        {/* <!--/.First slide--> */}

        {/* <!--Second slide--> */}
        <div class="carousel-item">

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                alt="Card image cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg"
                alt="Card image cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                alt="Card image cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(26).jpg"
                alt="Card image cap" />
            </div>
          </div>

        </div>
        {/* <!--/.Second slide--> */}

        {/* <!--Third slide--> */}
        <div class="carousel-item">

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(64).jpg"
                alt="Card image cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
                alt="Card image cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(59).jpg"
                alt="Card image cap" />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(63).jpg"
                alt="Card image cap" />
            </div>
          </div>

        </div>
        {/* <!--/.Third slide--> */}

      </div>
      {/* <!--/.Slides--> */}

    </div>
    //  {/* <!--/.Carousel Wrapper--> */ }
  )
}

export default MultiCarousel
