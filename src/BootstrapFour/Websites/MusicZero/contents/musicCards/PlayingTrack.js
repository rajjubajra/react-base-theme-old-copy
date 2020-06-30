import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


function PlayingTrack() {
  const track = useSelector(state => state.reducerPlayTheTrack.track);
  const status = useSelector(state => state.reducerPlayTheTrack.status);





  return (
    <div>
      <p className="mb-0">
        <audio src={track} preload='auto' controls></audio>
      </p>
    </div>
  )
}

export default PlayingTrack
