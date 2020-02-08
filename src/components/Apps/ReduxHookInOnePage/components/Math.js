import React from 'react'

export const Math = (props) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <h1>Math Value: from redux store</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <p>Math Result: {props.mathvalue}</p>
        <div>
          <ul>
            {props.lastvalue.map((item, index) => {
              return <li key={index}>Add: {item.number} | result: {item.result}</li>
            })}
          </ul>
        </div>
        <button
          className="btn-small-wide"
          onClick={() => props.addNumber(2)}>Add numbmer</button>
      </div>
    </div>
  </div>
);
