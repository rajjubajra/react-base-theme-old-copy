const { actionTypes } = require("./actionType");

export const actionPlayTheTrack = (track, id) => (
  {
    type: actionTypes.PLAY_THE_TRACK,
    track: track,
    id: id
  }
)

export const actionPauseTheTrack = (track, id) => (
  {
    type: actionTypes.PAUSE_THE_TRACK,
    track: track,
    status: 'pause',
    id: id
  }
)

export const actionStopTheTrack = (track, id) => (
  {
    type: actionTypes.STOP_THE_TRACK,
    track: track,
    status: 'stop',
    id: id
  }
)

