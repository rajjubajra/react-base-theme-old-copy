const { actionTypes } = require("./actionType");

export const actionPlayTheTrack = (track) => (
  {
    type: actionTypes.PLAY_THE_TRACK,
    track: track
  }
)

export const actionPauseTheTrack = (track) => (
  {
    type: actionTypes.PAUSE_THE_TRACK,
    track: track,
    status: 'pause'
  }
)

export const actionStopTheTrack = (track) => (
  {
    type: actionTypes.STOP_THE_TRACK,
    track: track,
    status: 'stop'
  }
)

