import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User } from './User';
import { UserForm } from './UserForm';
import { Math } from './Math';

const App = () => {

  const dispatch = useDispatch();

  const username = useSelector(state => state.userReducer.name);
  const mathResult = useSelector(state => state.mathReducer.result);
  const mathAddedArr = useSelector(state => state.mathReducer.lastValue);
  console.log("username", mathResult);


  function addNumber(number) {
    dispatch({
      type: "ADD",
      payload: number
    })
  }

  // function setName(name) {
  //   dispatch({
  //     type: "SET_NAME",
  //     payload: name
  //   })
  // }


  return (
    <div className="apps">
      <h3>Redux Lesson in one page</h3>
      <h2>REDUX and REACT HOOK</h2>
      <p><strong>Check console for action</strong></p>
      <UserForm />
      <User username={username} />
      <Math
        mathvalue={mathResult}
        lastvalue={mathAddedArr}
        addNumber={addNumber}
      />
    </div>
  )
}

export default App;

