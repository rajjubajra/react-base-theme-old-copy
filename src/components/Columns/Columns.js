import React from 'react'
import TwoColumns from './TwoColumns'
import TwoColumnLotus from './TwoColumnLotus'
import ThreeColumnWheat from './ThreeColumnWheat'
import TwoColumnWheat from './TwoColumnWheat'
import TwoColPriceWheat from './TwoColPriceWheat'

const Columns = () => {
  return (
    <div>
      <div>
        <TwoColumns />
      </div>
      <div>
        <TwoColumnLotus />
      </div>
      <div>
        <ThreeColumnWheat />
      </div>
      <div>
        <TwoColumnWheat />
      </div>
      <div>
        <TwoColPriceWheat />
      </div>

    </div>
  )
}

export default Columns
