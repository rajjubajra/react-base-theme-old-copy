/** REDUX LESSON */
import React from "react";

export const AppMain = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The Main Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button
            className="btn btn-primary"
            onClick={() => props.changeUsername("Ankanld")}>
            Change the Username
          </button>
          <button
            className="btn btn-primary"
            onClick={() => props.changeUserAge(30)}>
            Change the user Age
          </button>
        </div>
      </div>
    </div>
  );
}