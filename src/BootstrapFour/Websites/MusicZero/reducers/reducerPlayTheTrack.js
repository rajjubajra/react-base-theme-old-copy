const { actionTypes } = require("../actions/actionType")

const initialState = {
  track: '',
  status: ''
}


export const reducerPlayTheTrack = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAY_THE_TRACK:
      return {
        track: action.track,
        status: action.status
      }
    case actionTypes.PAUSE_THE_TRACK:
      return {
        track: action.track,
        status: action.status
      }
    case actionTypes.STOP_THE_TRACK:
      return {
        track: action.track,
        status: action.status
      }
    default:
      return state;
  }

}