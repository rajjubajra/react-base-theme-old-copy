import React from "react";

export const User = (props) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <h2>The User from Redux store</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <p>Printed Name: <b>{props.username}</b></p>
      </div>
    </div>
  </div>
)


