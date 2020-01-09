import React from 'react'
import Navbar from './Navbar';
import VideoHeadlinButton from './VideoHeadlinButton';
import B3TextImages from './B3TextImages';
import TwoColumnCTA from './TwoColumnCTA';
import Footer3Column from './Footer3Column';
import CopyRightFooter from './CopyRightFooter';


const Lotus = () => {
  return (
    <div className="lotus">
      <Navbar />
      <VideoHeadlinButton />
      <B3TextImages />
      <TwoColumnCTA />
      <Footer3Column />
      <CopyRightFooter />
    </div>
  )
}

export default Lotus
