import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { jsonTodos } from '../Config';
import ShowOutput from '../ShowOutput';


function Patch() {

  console.log('PUT');
  const [todos, setTotods] = useState([]);
  const [status, setStatus] = useState('');
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [config, setConfig] = useState([]);

  useEffect(() => {

    Axios({
      method: 'patch',
      url: `${jsonTodos.URL}/1`,
      data: {
        title: "Updated todo id one",
        completed: true
      }
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

export default Patch
