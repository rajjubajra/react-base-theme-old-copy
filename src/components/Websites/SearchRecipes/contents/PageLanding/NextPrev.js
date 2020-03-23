import React from 'react'
import { useDispatch } from 'react-redux';
import { actionSearch } from '../../action/actionSearch';


const NextPrev = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      {
        props.from > 0
          ? <button onClick={() => dispatch(actionSearch(props.text, props.from - 5, props.to - 5))}>Prev</button>
          : ''
      }
      item {props.from} to {props.to}
      {
        props.to > 0
          ? <button onClick={() => dispatch(actionSearch(props.text, props.from + 5, props.to + 5))}>Next</button>
          : ''
      }
    </div >
  )
}

export default NextPrev
