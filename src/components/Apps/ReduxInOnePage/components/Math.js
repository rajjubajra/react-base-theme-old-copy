import React, { Component } from 'react'

export class Math extends Component {
  render() {
    console.log("latstvalue ", this.props.lastvalue);
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>Math Value</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>Math Result: {this.props.mathvalue}</p>
            <div>
              <ul>
                {this.props.lastvalue.map((item, index) => {
                  return <li key={index}>Add: {item.number} | result: {item.result}</li>
                })}
              </ul>
            </div>
            <button
              className="btn-small-wide"
              onClick={() => this.props.addNumber(1)}>Add numbmer</button>
          </div>
        </div>
      </div>
    )
  }
}
