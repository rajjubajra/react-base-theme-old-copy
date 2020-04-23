import React from 'react'
import { baseUrl } from './utilities/configApi'
import { useSelector } from 'react-redux';

const LogoSquare = () => {

  const logo = useSelector(state => state.reducerFetchLogo.logoSquare);
  const logoFetched = useSelector(state => state.reducerFetchLogo.fetched);




  return (
    <div className="logo-square">
      {logoFetched ? <img src={`${baseUrl.URL}/${logo}`} alt="logo" /> : ''}
    </div>
  )
}

export default LogoSquare
