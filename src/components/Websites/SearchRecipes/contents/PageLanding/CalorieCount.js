import React, { useState } from 'react'

const CalorieCount = ({ serving, calories }) => {
  const [result, setResult] = useState('');
  const [val, setVal] = useState(serving);



  const countCalories = (e) => {
    //return 'count calories' + e.target.value;
    console.log(e.target.value);
    let serve = e.target.value;
    setResult(calories / serve);
    setVal(e.target.value);
  }



  return (
    <>
      <p>
        Serving: <input
          className="serving"
          type="number"
          value={val}
          onChange={(e) => countCalories(e)}
        />
      </p>
      <p>
        Total Calories: {result > 0 ? Math.round(result) : Math.round(calories)}
      </p>
    </>
  )
}

export default CalorieCount
