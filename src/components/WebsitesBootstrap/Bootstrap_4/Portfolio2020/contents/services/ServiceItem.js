import React from 'react'

function ServiceItem(props) {
  return (
    <div class="col-lg-3 col-md-6 col-sm-12">
      <div class="services">
        <div class="sevices-img text-center py-4">
          <img style={{ width: '100%', maxWidth: '200px' }} src={props.img} alt="Services-1" />
        </div>
        <div class="card-body text-center">
          <h5 class="card-title text-uppercase font-roboto">Wp developer</h5>
          <p class="card-text text-secondary">
            Some quick example text to build on the card
            title and make up
            the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
