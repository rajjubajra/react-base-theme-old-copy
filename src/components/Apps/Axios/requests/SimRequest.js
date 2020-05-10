import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { jsonTodos, jsonPost } from '../Config';
import ShowOutput from '../ShowOutput';



function SimRequest() {

  console.log('GET');
  const [todos, setTotods] = useState([]);
  const [status, setStatus] = useState('');
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [config, setConfig] = useState([]);

  useEffect(() => {

    Axios.all([
      Axios.get(`${jsonTodos.URL}?_limit=5}`),
      Axios.get(`${jsonPost.URL}?_limit=5`)
    ])
      // .then((res) => {
      //   console.log(res[1]);
      //   console.log(res[0]);
      //   setTotods(res[1]);
      //   setStatus(res[1].status);
      //   setHeaders(res[1].headers);
      //   setData(res[1].data);
      //   setConfig(res[1].config);
      // })
      //---following is cleaner way ---
      .then(Axios.spread((todos, posts) => {
        console.log(posts);
        console.log(todos);
        setTotods(posts);
        setStatus(posts.status);
        setHeaders(posts.headers);
        setData(posts.data);
        setConfig(posts.config);
      }))
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

export default SimRequest
