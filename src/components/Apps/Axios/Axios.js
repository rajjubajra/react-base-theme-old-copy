import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Get from './requests/Get';
import Post from './requests/Post';
import NavBar from './NavBar';
import Patch from './requests/Patch';
import Put from './requests/Put';
import Delete from './requests/Delete';
import SimRequest from './requests/SimRequest';
import Interceptors from './requests/Interceptors';
import Transform from './requests/Transform';
import ErrorHandling from './requests/ErrorHandling';
import Canceled from './requests/Cancel';

function Axios() {
  return (
    <div className="apps">
      <h1>Axios Crash Course | HTTP Library</h1>
      <NavBar />
      <Interceptors />
      <Switch>
        <Route path="/app-axios/get" component={Get} />
        <Route path="/app-axios/post" component={Post} />
        <Route path="/app-axios/patch" component={Patch} />
        <Route path="/app-axios/put" component={Put} />
        <Route path="/app-axios/delete" component={Delete} />
        <Route path="/app-axios/sim-request" component={SimRequest} />
        <Route path="/app-axios/error-handling" component={ErrorHandling} />
        <Route path="/app-axios/cancel-request" component={Canceled} />
      </Switch>
    </div>
  )
}

export default Axios
