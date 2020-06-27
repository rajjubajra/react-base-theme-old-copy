import React from 'react'
import Button from './Button';


function ButtonGroup() {
  return (
    <div className="button-group">
      <Button name="All" datafilter="*" />
      <Button name="Popular" datafilter=".popular" />
      <Button name="Latest" datafilter=".latest" />
      <Button name="Upcoming" datafilter=".upcoming" />
    </div>
  )
}

export default ButtonGroup
