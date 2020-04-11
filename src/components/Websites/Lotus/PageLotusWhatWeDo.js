import React from 'react'
import NavLotus from './NavLotus'
import LotusWhatWeDo from './LotusWhatWeDo'
import TwoColumnContact from './TwoColumnContact'
import FormInBox from './FormInBox'


const PageLotusWhatWeDo = () => {
  return (
    <>
      <div className="lotus">
        <div className="lotus-nav">
          <NavLotus />
        </div>
        <div className="lotus-body">
          <div className="divider"></div>
          <LotusWhatWeDo />
          <div className="divider"></div>
          <div className="divider"></div>
          <TwoColumnContact />
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <FormInBox />
          <div className="divider"></div>
          <div className="divider"></div>

        </div>
      </div>

    </>
  )
}

export default PageLotusWhatWeDo
