import React from 'react'
import { useSelector } from 'react-redux';
import LogoSquare from './LogoSquare';

const Contact = () => {
  const contact = useSelector(state => state.reducerFetchText.contactTitle);
  return (
    <>
      <LogoSquare />
      <p>{contact}</p>
    </>
  )
}

export default Contact
