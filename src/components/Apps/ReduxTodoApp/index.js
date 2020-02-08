import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import TodoApp from './components/TodoApp';



const reduxTodoApp = () => {
  return (

    <div className="apps">
      <h1>Todo App [Redux]</h1>
      <Provider store={store}>
        <TodoApp />
      </Provider>

    </div>

  )
}

export default reduxTodoApp
