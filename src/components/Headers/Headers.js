import React, { useState } from 'react'
import EcomHeaderTop from './EcomHeaderTop'
import EcomSearchBar from './EcomSearchBar'
import TitleWide from './TitleWide'
import LanPasaaTitle from './LanPasaaTitle'

const Headers = () => {

  /**TitleWide Props */
  const [title] = useState('About us');
  const [backgroundImage] = useState('cake-44');

  /** Title for Lanpasaa */
  const [storeName] = useState('Lan Pasaa');


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

      {/** WIDE TITLE */}
      <TitleWide title={title} backgroundImage={backgroundImage} />


      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>

      {/** LAN PASAA  TITLE */}
      <LanPasaaTitle title={storeName} />


      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>

    </div>
  )
}

export default Headers
