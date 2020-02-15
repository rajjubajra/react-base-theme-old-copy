import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import TodoApp from './components/TodoApp';
import CopyRightFooter from './components/CopyRightFooter';



const reduxTodoApp = () => {
  return (
    <>
      <div className="apps">
        <h1>Todo App [Redux + React Hook]</h1>
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </div>
      <CopyRightFooter />
    </>

  )
}

export default reduxTodoApp


