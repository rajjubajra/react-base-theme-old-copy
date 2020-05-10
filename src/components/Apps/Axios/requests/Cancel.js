import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { jsonTodos } from '../Config';
import ShowOutput from '../ShowOutput';



function Canceled() {

  console.log('GET');
  const [todos, setTotods] = useState([]);
  const [status, setStatus] = useState('');
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [config, setConfig] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {

    const source = Axios.CancelToken.source();

    Axios.get(`${jsonTodos.URL}?_limit=5`, { cancelToken: source.token })
      .then((res) => {
        setTotods(res)
        setStatus(res.status);
        setHeaders(res.headers);
        setData(res.data);
        setConfig(res.config);
      })
      .catch(thrown => {
        if (Axios.isCancel(thrown)) {
          console.log('[ Request canceled !! ]', thrown.message);
          setMessage('Request Canceled');
        }
      });
    //if true request will be canceled
    if (true) {
      source.cancel('REQUEST CANCELED');
    }

  }, [])


  console.log(todos, data.length);

  return (
    <div>
      <div className="header">

        <p><b>{message}</b></p>
        <p></p>
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

export default Canceled
