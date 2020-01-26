const initialState = {
  counter: 0,
  storeName: 'Lan Pasaa',
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 }

    case "DECREMENT":
      return { counter: state.counter - 1 }

    case "STORE_NAME":
      return { storeName: state }

    default:
      return state;
  }

}
export default rootReducer;