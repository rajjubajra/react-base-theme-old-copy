import { actionTypes } from '../actions/actionType';

const initialState = {
  colourMode: 'black-white-theme'
}

export const reducerSelectColourMode = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_COLOUR_MODE:
      return { colourMode: action.payload }
    default:
      return state;
  }
} 