const initialState = {
  counter: 0,
  storeName: 'Lan Pasaa',
  basket: [], //push product id to the basket
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 }

    case "DECREMENT":
      return { counter: state.counter - 1 }

    case "STORE_NAME":
      return { storeName: state }

    case "ADD_TO_BASKET":
      return {
        basket: [state.basket.push('new one')]
      }

    default:
      return state;
  }

}
export default rootReducer;