import React, { useState } from 'react'

const TodoForm = (addTodo) => {
  const [value, setValue] = useState("");


  console.log(value);
  return (
    <form>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default TodoForm;
