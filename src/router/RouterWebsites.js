import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import MeghaMenu from '../components/Navigation/MeghaMenu';
import Websites from '../components/Websites/Websites';
import LotusRouter from '../components/Websites/Lotus/LotusRouter';
import LanPasaa from '../components/Websites/LanPasaa/LanPasaa';
import Coffee from '../components/Websites/Coffee/Coffee';
import Wheat from '../components/Websites/Wheat/Wheat';
import SearchRecipes from '../components/Websites/SearchRecipes/SearchRecipes';
import Covide from '../components/Websites/Covid/Covid';




function RouterWebsites() {
  const [btnShowHide] = useState(true);
  return (
    <div className="App">
      {/** WEBSITES NAV PAGE *****************************************/}
      <Route path="/websites" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Websites />
        </div>
      </Route>

      {/** Route included withing following components */}
      <LotusRouter />
      <LanPasaa />
      <Coffee />
      <Wheat />

      {/** EXTERNAL API BASE WEBSITE */}
      <SearchRecipes />
      <Covide />

    </div>
  )
}

export default RouterWebsites

