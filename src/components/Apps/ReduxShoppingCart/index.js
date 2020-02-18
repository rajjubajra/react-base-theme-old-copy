import React, { useEffect } from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './store';



const ReduxShoppingCart = () => {

  useEffect(() => {
    console.log("useEffecIndex");
  }, [])


  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  )
}

export default ReduxShoppingCart
