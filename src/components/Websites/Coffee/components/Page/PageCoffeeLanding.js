import React from 'react'
import CoffeeLanding from './Landing/CoffeeLanding'
import HowItWorks from './Landing/HowItWorks'


const PageCoffeeLanding = () => {
  return (
    <div className="coffee-landing">
      <div className="header">Main Nav</div>
      <div className="landing"><CoffeeLanding /></div>
      <div className="block-2"><HowItWorks /></div>
      <div className="block-3">3rd Block</div>
      <div className="block-4">4th block</div>
      <div className="block-5">5th block[subscription]</div>
      <div className="block-6">6th block</div>
      <div className="footer-1">Footer - 1</div>
    </div>
  )
}

export default PageCoffeeLanding
