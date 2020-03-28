import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionSearch } from '../../action/actionSearch';


const NextPrev = (props) => {

  const dispatch = useDispatch();
  const healthLabel = useSelector(state => state.reducerSearch.health);

  return (
    <div>
      {
        props.from > 0
          ? <button onClick={() => dispatch(actionSearch(
            props.text,
            props.from - 5,
            props.to - 5,
            healthLabel))}>Prev</button>
          : ''
      }
      item {props.from} to {props.to}
      {
        props.to > 0
          ? <button onClick={() => dispatch(actionSearch(
            props.text,
            props.from + 5,
            props.to + 5,
            healthLabel))}>Next</button>
          : ''
      }
    </div >
  )
}

export default NextPrev
