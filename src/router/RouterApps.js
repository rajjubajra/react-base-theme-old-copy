import React from 'react'
import { Switch, Route } from 'react-router-dom';
import AddPost from '../components/Apps/AddPost/AddPost';
import ReduxInOnePage from '../components/Apps/ReduxInOnePage';
import ReduxHookInOnePage from '../components/Apps/ReduxHookInOnePage';
import AddPostClass from '../components/Apps/AddPostClass/AddPostClass';
import ReduxLesson from '../components/Apps/ReduxLesson';
import TodoAppRedux from '../components/Apps/ReduxTodoApp'
import ReduxShoppingCart from '../components/Apps/ReduxShoppingCart';


const RouterApps = () => {
  return (
    <Switch>
      {/** REACT APPS */}
      <Route path="/apps-redux-in-one-page" component={ReduxInOnePage} />
      <Route path="/apps-redux-hook-in-one-page" component={ReduxHookInOnePage} />
      <Route path="/apps-redux-lesson" component={ReduxLesson} />
      <Route path="/apps-add-post" component={AddPost} />
      <Route path="/apps-add-post-class" component={AddPostClass} />
      <Route path="/apps-todo-redux" component={TodoAppRedux} />
      <Route path="/apps-redux-shopping-cart" component={ReduxShoppingCart} />

    </Switch>
  )
}

export default RouterApps
