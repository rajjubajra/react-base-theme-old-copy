import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const UserForm = () => {

  const [username, setUsername] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  console.log(username);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.trim("") === "") {
      setAlertMessage("Please enter name to print");
      return;
    }
    dispatch({
      type: "SET_NAME",
      payload: username
    })
    setAlertMessage("");//clear message
    setUsername(""); //clear input field
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The Main Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <form onSubmit={onSubmit}>
            <input
              className="regular"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username to print"
            />
            <p style={{ fontSize: "1rem", textalign: "center" }}>{alertMessage}</p>
            <button type="submit" className="btn btn-small-wide">Print Name</button>
          </form>

        </div>
      </div>
    </div>
  )
}

