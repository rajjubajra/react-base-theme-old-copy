const { actionTypes } = require("../actions/actionType")

const initialState = {
  track: '',
  status: '',
  id: ''
}


export const reducerPlayTheTrack = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAY_THE_TRACK:
      return {
        track: action.track,
        status: action.status,
        id: action.id
      }
    case actionTypes.PAUSE_THE_TRACK:
      return {
        track: action.track,
        status: action.status,
        id: action.id
      }
    case actionTypes.STOP_THE_TRACK:
      return {
        track: action.track,
        status: action.status,
        id: action.id
      }
    default:
      return state;
  }

}