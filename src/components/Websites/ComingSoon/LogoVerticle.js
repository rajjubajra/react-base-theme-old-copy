import React from 'react';
import { baseUrl } from './utilities/configApi'
import { useSelector } from 'react-redux';


const LogoVerticle = () => {

  const logo = useSelector(state => state.reducerFetchLogo.logo);
  const logoFetched = useSelector(state => state.reducerFetchLogo.fetched);


  return (
    <div className="logo-verticle">
      {logoFetched ? <img src={`${baseUrl.URL}/${logo}`} alt="logo" /> : ''}
    </div>
  )
}

export default LogoVerticle
