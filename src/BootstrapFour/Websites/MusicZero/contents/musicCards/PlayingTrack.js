import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAudio } from 'react-use';


function PlayingTrack() {
  const track = useSelector(state => state.reducerPlayTheTrack.track);
  const status = useSelector(state => state.reducerPlayTheTrack.status);



  const [audio, state, controls, ref] = useAudio({
    src: track,
    autoPlay: true,
  });

  console.log(state);



  return (

    <div>
      <p className="mb-0">
        {/* { <audio src={track} preload='auto' controls></audio>} */}
        {audio}
        {state.time}
        <button onClick={controls.play}>Play</button>
        <button onClick={controls.pause}>Pause</button>
      </p>
    </div>
  )
}

export default PlayingTrack
