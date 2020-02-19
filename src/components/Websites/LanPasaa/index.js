import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import LanPasaa from './components/LanPasaa';


/** LAN PASAA */
const index = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <LanPasaa />
    </Provider>

  )
}
export default index