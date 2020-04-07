import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PageLanding from './contents/PageLanding';
import { Provider } from 'react-redux';
import { store } from './store';

const SearchRecipes = () => {
  return (
    <Switch>
      <Provider store={store}>
        <Route path="/search-recipes" component={PageLanding} />
      </Provider>
    </Switch>
  )
}
export default SearchRecipes