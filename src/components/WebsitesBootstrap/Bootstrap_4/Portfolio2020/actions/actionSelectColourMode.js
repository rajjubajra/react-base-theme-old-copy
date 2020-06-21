import { actionTypes } from './actionType';


export const actionSelectColourMode = (colourMode) => (
  {
    type: actionTypes.SELECT_COLOUR_MODE,
    payload: colourMode
  }
)