import React from 'react';
import { useSelector } from 'react-redux';


const Body = () => {

  const body = useSelector(state => state.reducerFetchText.body);

  return (
    <div dangerouslySetInnerHTML={{ __html: body }} />
  )
}

export default Body
