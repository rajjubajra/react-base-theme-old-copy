import React from 'react'
import { Switch, Route } from 'react-router-dom';
import AddPost from './AddPost/AddPost';
import ReduxInOnePage from './ReduxInOnePage';
import ReduxHookInOnePage from './ReduxHookInOnePage';
import AddPostClass from './AddPostClass/AddPostClass';
import ReduxLesson from './ReduxLesson';
import TodoAppRedux from './ReduxTodoApp'
import ReduxShoppingCart from './ReduxShoppingCart';
import Axios from './Axios/Axios';


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
      <Route path="/app-axios" component={Axios} />
    </Switch>
  )
}

export default RouterApps
