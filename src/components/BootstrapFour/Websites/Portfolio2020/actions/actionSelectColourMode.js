import { actionTypes } from './actionType';

export const actionSelectColourMode = (colourMode, variant) => {

  return {
    type: actionTypes.SELECT_COLOUR_MODE,
    payload: colourMode,
    variant: variant
  }

}