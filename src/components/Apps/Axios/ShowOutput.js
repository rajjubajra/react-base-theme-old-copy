import React, { useState, useEffect } from 'react'



function ShowOutput(props) {


  return (
    <div>
      <div className="header">
        <h2>Status: {props.status}</h2>
      </div><hr />

      <div className="header">
        <h2>Headers</h2>
        <div>
          <pre>{JSON.stringify(props.headers, null, 2)}</pre>
        </div>
      </div><hr />
      <div className="header">
        <h2>Data</h2>
        <div>
          <pre>{JSON.stringify(props.data, null, 2)}</pre>
          <hr />

          {
            props.config.method === 'get' ?
              props.data.map((item) => {
                return <div key={item.id}>
                  <p><b>{item.id} : {item.title}</b><br />
                    {item.completed ? "Completed" : "Pending"}</p>
                </div>
              })
              : ''
          }
        </div>
      </div><hr />
      <div className="header">
        <h2>Config</h2>
        <div>
          <pre>{JSON.stringify(props.config, null, 2)}</pre>
        </div>
      </div><hr />
    </div>
  )
}

export default ShowOutput
