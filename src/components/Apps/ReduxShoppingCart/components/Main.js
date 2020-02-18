import React from 'react';
import Categories from './Categories';
import Products from './Products';
import Cart from './Cart';
import CopyRightFooter from '../../ReduxTodoApp/components/CopyRightFooter';

const Main = () => {
  return (
    <>
      <div className="apps">
        <h1>Shopping Cart [React-Redux]</h1>
        <div style={{ display: "flex" }}>
          <div><Categories /></div>
          <div><Products /></div>
          <div><Cart /></div>
        </div>
      </div>
      <CopyRightFooter />
    </>
  )
}

export default Main
