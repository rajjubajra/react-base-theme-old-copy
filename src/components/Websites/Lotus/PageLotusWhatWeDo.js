import React from 'react'
import CopyRightFooter from './CopyRightFooter'
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
      <CopyRightFooter />
    </>
  )
}

export default PageLotusWhatWeDo
