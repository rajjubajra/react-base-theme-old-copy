const initialStateMath = {
  result: 1,
  lastValue: []
}
const mathReducer = (state = initialStateMath, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'MATH_ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValue: [...state.lastValue, action.payload]
      }
      // state.lastValue.push(action.payload)
      break;
    case 'MATH_SUBTRACT':
      //state.result -= action.payload;
      state = {
        ...state,
        result: state.result - action.payload,
        lastValue: [...state.lastValue, action.payload]
      }
      //state.lastValue.push(action.payload)
      break;
  }
  return state;
}
export default mathReducer;