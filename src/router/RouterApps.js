import React from 'react'
import { Switch, Route } from 'react-router-dom';
import AddPost from '../components/Apps/AddPost/AddPost';
import ReduxInOnePage from '../components/Apps/ReduxInOnePage';
import AddPostClass from '../components/Apps/AddPostClass/AddPostClass';
import ReduxLesson from '../components/Apps/ReduxLesson';


const RouterApps = () => {
  return (
    <Switch>
      {/** REACT APPS */}
      <Route path="/apps-redux-in-one-page" component={ReduxInOnePage} />
      <Route path="/apps-redux-lesson" component={ReduxLesson} />
      <Route path="/apps-add-post" component={AddPost} />
      <Route path="/apps-add-post-class" component={AddPostClass} />
    </Switch>
  )
}

export default RouterApps
