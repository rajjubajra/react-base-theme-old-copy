const initialStateUser = {
  name: 'Max',
  age: 20
}
const userReducer = (state = initialStateUser, action) => {

  switch (action.type) {
    case 'USER_SET_NAME':
      state = {
        ...state,
        name: action.payload,
      }
      break;
    case 'USER_SET_AGE':
      //state.result -= action.payload;
      state = {
        ...state,
        age: action.payload,
      }
      //state.lastValue.push(action.payload)
      break;
    default:
      return state;
  }
  return state;
}
export default userReducer;