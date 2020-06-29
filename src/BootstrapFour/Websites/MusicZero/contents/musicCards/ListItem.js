import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { actionPlayTheTrack, actionPauseTheTrack, actionStopTheTrack } from '../../actions/actionPlayTheTrack';


function ListItem(props) {

  const dispatch = useDispatch();

  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  //console.log('variant', variant);

  return (
    <>
      <Alert variant={variant}>
        <Alert.Heading>Song: {props.title}</Alert.Heading>
        <img src={props.cover} alt="cover" />
        <p>Artist: {props.artist}</p>
        <p>Album: {props.album}</p>
        <hr />
        <p className="mb-0">
          <button onClick={() => dispatch(actionPlayTheTrack(props.preview))}>Play</button>
          <button onClick={() => dispatch(actionPauseTheTrack(props.preview))}>Pause</button>
          <button onClick={() => dispatch(actionStopTheTrack(props.preview))}>Stop</button>
        </p>
      </Alert>
    </>
  )
}

export default ListItem
