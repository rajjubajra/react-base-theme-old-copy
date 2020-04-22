import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actionSummary } from '../action/actionSummary';
import { Link } from 'react-router-dom';

const Nav = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionSummary());
  }, [dispatch])

  return (
    <div className="nav">
      <Link to="/covid">List by Country</Link>
      <Link to="/geocharts">Geo Charts</Link>
      <Link to="/dayonetotal">Day one Total</Link>
      <Link to="/countrystatus">Country Status</Link>
    </div>
  )
}
export default Nav