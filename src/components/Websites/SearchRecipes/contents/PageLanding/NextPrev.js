import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionSearch } from '../../action/actionSearch';


const NextPrev = (props) => {

  const dispatch = useDispatch();
  const healthLabel = useSelector(state => state.reducerSearch.health);

  return (
    <div className="page-nav">
      <ul>
        <li>
          {
            props.from > 0
              ? <button onClick={() => dispatch(actionSearch(
                props.text,
                props.from - 5,
                props.to - 5,
                healthLabel))}>Prev</button>
              : ''
          }
        </li>
        <li>item</li>
        <li>{props.from}</li>
        <li>to</li>
        <li>{props.to}</li>
        <li>
          {
            props.to > 0
              ? <button onClick={() => dispatch(actionSearch(
                props.text,
                props.from + 5,
                props.to + 5,
                healthLabel))}>Next</button>
              : ''
          }
        </li>
      </ul>
    </div >
  )
}

export default NextPrev
