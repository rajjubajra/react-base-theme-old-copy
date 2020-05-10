import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterReUseComponents from './RouterReUseComponents';
import RouterApps from '../components/Apps/RouterApps';
import LanPasaa from '../components/Websites/LanPasaa/LanPasaa';
import Coffee from '../components/Websites/Coffee/Coffee';
import Wheat from '../components/Websites/Wheat/Wheat';
import SearchRecipes from '../components/Websites/SearchRecipes/SearchRecipes';
import Covid from '../components/Websites/Covid/Covid';
import LotusRouter from '../components/Websites/Lotus/LotusRouter';
import CopyRightFooter from '../components/Footers/CopyRightFooter';


const Router = () => {

  return (
    <>
      <BrowserRouter>
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
        <div className="copy-right-footer">
          <CopyRightFooter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default Router
