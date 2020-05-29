import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterCustomStyle from './RouterCustomStyle';
import RouterBootstrap4Style from './RouterBootstrap4Style';
import CopyRightFooter from '../components/CopyRightFooter/CopyRightFooter';



const Router = () => {

  return (
    <>
      <BrowserRouter>
        <RouterCustomStyle />


        <div className="copy-right-footer">
          <CopyRightFooter />
        </div>

      </BrowserRouter>


    </>
  )
}

export default Router
