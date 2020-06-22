import React from 'react';
import './ColourMode.scss';
import { useDispatch } from 'react-redux';
import { actionSelectColourMode } from '../../actions/actionSelectColourMode';



function ColourMode() {
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="colour-mode">
        <li className="colour-icon-bw"
          onClick={() => dispatch(actionSelectColourMode('black-white-theme', 'dark'))}></li>
        <li className="colour-icon-light"
          onClick={() => dispatch(actionSelectColourMode('light-theme', 'light'))}>
        </li>
        <li className="colour-icon-dark"
          onClick={() => dispatch(actionSelectColourMode('dark-theme', 'dark'))}></li>
        <li className="colour-icon-colour"
          onClick={() => dispatch(actionSelectColourMode('colour_theme', 'danger'))}></li>
      </ul>

    </div>
  )
}

export default ColourMode
