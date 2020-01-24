import React, { useState } from 'react'
import EcomHeaderTop from './EcomHeaderTop'
import EcomSearchBar from './EcomSearchBar'
import TitleWide from './TitleWide'

const Headers = () => {

  /**TitleWide Props */
  const [title] = useState('About us');
  const [backgroundImage] = useState('cake-44');


  return (
    <div>
      <EcomHeaderTop />
      <div className="divider"></div>
      <div className="divider"></div>
      <EcomSearchBar />
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>

      <TitleWide title={title} backgroundImage={backgroundImage} />



      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>

    </div>
  )
}

export default Headers
