import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { jsonTodos } from '../Config';
import ShowOutput from '../ShowOutput';



function Transform() {

  console.log('Post');
  const [todos, setTotods] = useState([]);
  const [status, setStatus] = useState('');
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [config, setConfig] = useState([]);

  useEffect(() => {
    const options = {
      method: 'post',
      url: `${jsonTodos.URL}`,
      data: {
        title: "hello world"
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'sometoken'
      },
      transformResponse: Axios.defaults.transformResponse.concat(data => {
        data.title = data.title.toUpperCase();
        return data;
      })
    }
    Axios(options)
      .then((res) => {
        setTotods(res)
        setStatus(res.status);
        setHeaders(res.headers);
        setData(res.data);
        setConfig(res.config);
      })
      .catch(err => console.error(err))
  }, [])

  console.log(todos);

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

export default Transform
