import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { jsonTodos } from '../Config';
import ShowOutput from '../ShowOutput';



function Get() {

  console.log('GET');
  const [todos, setTotods] = useState([]);
  const [status, setStatus] = useState('');
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [config, setConfig] = useState([]);

  useEffect(() => {

    Axios({
      method: 'GET',
      url: `${jsonTodos.URL}?_limit=5`,
      // validateStatus: function (status) {
      //   return status < 5000; //Reject only if status is greater or equal to 500
      // }
    })
      .then((res) => {
        setTotods(res)
        setStatus(res.status);
        setHeaders(res.headers);
        setData(res.data);
        setConfig(res.config);
      })
      .catch(err => console.error(err))
  }, [])

  console.log(todos, data.length);

  return (
    <div>
      <div className="header">
        <ShowOutput
          status={status}
          headers={headers}
          data={data}
          config={config}
        />
      </div>

    </div>
  )
}

export default Get
