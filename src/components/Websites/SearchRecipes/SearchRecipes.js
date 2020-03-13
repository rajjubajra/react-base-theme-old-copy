import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PageLandingSR from './contents/PageLandingSR';
import { Provider } from 'react-redux';
import { store } from './store';

const SearchRecipes = () => {
  return (
    <Switch>
      <Provider store={store}>
        <Route path="/search-recipes" component={PageLandingSR} />
      </Provider>

    </Switch>
  )
}
export default SearchRecipes