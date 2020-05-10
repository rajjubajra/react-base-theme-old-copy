import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { jsonTodos } from '../Config';
import ShowOutput from '../ShowOutput';
import PageNotFound from '../PageNotFound';
import { Redirect, Router, Switch } from 'react-router-dom';

function ErrorHandling() {

  console.log('Error Handling');
  const [todos, setTotods] = useState([]);
  const [status, setStatus] = useState('');
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [config, setConfig] = useState([]);
  const [errorPage, setErrorPage] = useState(false);


  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/todoss')//wrong url
      .then(res => {
        setTotods(res);
        setStatus(res.status);
        setHeaders(res.headers);
        setData(res.data);
        setConfig(res.config);
      })
      .catch(err => {
        if (err.response) {
          //server responded with a status other than 200 rang
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          if (err.response.status === 404) {
            setErrorPage(true);
          } else if (err.request) {
            console.error(err.request);
          } else if (err.message) {
            console.error(err.message);
          }
        }
      })
  }, [])

  return (
    <div>
      <div className="header">
        {
          errorPage
            ? <PageNotFound /> :
            <ShowOutput
              status={status}
              headers={headers}
              data={data}
              config={config}
            />
        }
      </div>

    </div>
  )
}

export default ErrorHandling
