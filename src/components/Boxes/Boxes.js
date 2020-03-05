import React from 'react'
import B4Members from './B4Members';
import B3Images from './B3Images';
import B3Services from './B3Services';
import B3Cards from './B3Cards';
import B3TextImages from './B3TextImages';
import B2LeftRight from './B2LeftRight';
import B2Reviews from './B2Reviews';
import B3Plans from './B3Plans';
import B3Prices from './B3Prices';
import B4BoxBorder from './B4BoxBorder';
import B4Boxes from './B4Boxes';
import B3Blocks from './B3Blocks';

const Boxes = () => {
  return (
    <div className="app">
      <B4Members />
      <B3Images />
      <B3Services />
      <B3Cards />
      <B3TextImages />
      <B2LeftRight />
      <B2Reviews />
      <B3Plans />
      <B3Prices />
      <B4BoxBorder />
      <B4Boxes />
      <B3Blocks />
    </div>
  )
}

export default Boxes
