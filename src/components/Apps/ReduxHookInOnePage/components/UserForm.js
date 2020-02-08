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
      setAlertMessage("Input field is empty");
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
          <form onSubmit={onSubmit}>
            <input
              className="regular"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter text to print"
            />
            <p style={{ fontSize: "1rem", textalign: "center", fontWeight: "bold", textAlign: "center", color: "red" }}>{alertMessage}</p>
            <button type="submit" className="btn btn-small-wide">Print Name</button>
          </form>
        </div>
      </div>
    </div>
  )
}

