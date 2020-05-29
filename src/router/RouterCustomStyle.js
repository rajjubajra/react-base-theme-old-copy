import React from 'react'
import RouterReUseComponents from './RouterReUseComponents';
import RouterApps from '../components/Apps/RouterApps';
import LanPasaa from '../components/Websites/LanPasaa/LanPasaa';
import Coffee from '../components/Websites/Coffee/Coffee';
import Wheat from '../components/Websites/Wheat/Wheat';
import SearchRecipes from '../components/Websites/SearchRecipes/SearchRecipes';
import Covid from '../components/Websites/Covid/Covid';
import LotusRouter from '../components/Websites/Lotus/LotusRouter';

/**
 *  App.scss @custom style file is included 
 *  in respected folders main route file.
 */

function RouterCustomStyle() {
  return (
    <>
      {/** APPS */}
      <RouterApps />
      <SearchRecipes />
      <Covid />

      {/** WEBSITES */}
      <LotusRouter />
      <LanPasaa />
      <Coffee />
      <Wheat />

      <RouterReUseComponents />

    </>
  )
}

export default RouterCustomStyle
