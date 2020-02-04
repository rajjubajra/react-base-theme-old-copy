const initialCounter = {
  number: 6
}

const counterReducer = (state = initialCounter, action) => {

  switch (action.type) {
    case 'INCREMENT':
      console.log("reducer", action.type, state);
      state = {
        number: state.number === 20 ? state.number : state.number += action.payload
      }
      break;
    case "DECREMENT":
      state = {
        number: state.number === 0 ? state.number : state.number -= action.payload
      }
      break;
    default:
      return state;
  }

  return state;

}

export default counterReducer;