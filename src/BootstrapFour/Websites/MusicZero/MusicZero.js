import React from 'react';
import RouteMusicZero from './contents/RouteMusicZero';
import { Provider } from 'react-redux';
import { store } from './store';
import './MusicZero.scss';

function MusicZero() {
  return (
    <Provider store={store}>
      <RouteMusicZero />
    </Provider>


  )
}

export default MusicZero
