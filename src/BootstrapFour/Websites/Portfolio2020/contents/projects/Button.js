import React from 'react'
import { useDispatch } from 'react-redux';
import { actionSelectGroup } from '../../actions/actionsSelectGroup'


const btnStyle = {
  border: '0px',
  background: 'none',
  margin: '0px 20px',
  outline: '0px'
}




function Button(props) {
  const dispatch = useDispatch();

  return (
    <button
      style={btnStyle}
      type="button"
      className="active"
      id="btn1"
      data-filter={props.datafilter}
      onClick={() => dispatch(actionSelectGroup(props.name))}
    >
      {props.name}
    </button>
  )
}

export default Button
