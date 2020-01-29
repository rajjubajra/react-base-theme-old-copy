import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ReduxCounter from '../components/Apps/ReduxCounter/ReduxCounter';
import AddPost from '../components/Apps/AddPost/AddPost';
import AddPostRedux from '../components/Apps/AddPostRedux/AddPostRedux';
import ReduxInOnePage from '../components/Apps/ReduxInOnePage';


const RouterApps = () => {
  return (
    <Switch>
      {/** REACT APPS */}
      <Route path="/apps-redux-in-one-page" component={ReduxInOnePage} />
      <Route path="/apps-Redux-Counter" component={ReduxCounter} />
      <Route path="/apps-addPost" component={AddPost} />
      <Route path="/apps-addPostRedux" component={AddPostRedux} />
    </Switch>
  )
}

export default RouterApps
