import React from 'react'
import Axios from 'axios'


function Interceptors() {


  Axios.interceptors.request.use(
    config => {
      console.log(
        `FILE: App/Axios -> ${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`
      );
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );



  return (
    <div>

    </div>
  )
}

export default Interceptors
