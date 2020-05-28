import React from 'react'

function Text() {
  return (
    <div class="tool-text-area">
      <div class="d-flex flex-row years-area">
        <h2 class="p-3 years">10</h2>
        <h2>
          <span>Years</span>
          <span>Experience</span>
          <span>Working</span>
        </h2>
      </div>
      <div class="d-flex flex-row flex-wrap call-area">
        <span><i class="fas fa-phone-alt fa-3x px-3"></i></span>
        <div class="call-now">
          <a href="#" class="text-uppercase h4 font-roboto">Call Now</a>
          <span class="font-roboto py-2">(+91)-800-555-4986</span>
        </div>
      </div>
      <div class="bg-panel"></div>
    </div>
  )
}

export default Text
