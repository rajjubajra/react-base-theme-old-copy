import React from 'react'
import NavLotus from './NavLotus'
import LotusAboutUs from './LotusAboutUs'
import LotusTeam from './LotusTeam'
import TwoColumnContact from './TwoColumnContact'

const PageLotusAbout = () => {
  return (
    <>
      <div className="lotus">
        <div className="lotus-nav">
          <NavLotus />
        </div>
        <div className="lotus-body">
          <LotusAboutUs />
          <LotusTeam />
          <div className="divider"></div>
          <div className="divider"></div>
          <TwoColumnContact />
        </div>

      </div>
    </>
  )
}

export default PageLotusAbout
