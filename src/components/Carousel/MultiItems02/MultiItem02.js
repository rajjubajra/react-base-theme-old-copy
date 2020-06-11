import React from 'react'
import './MultiItem02.scss';
import Media from 'react-bootstrap/Media';


function MultiItem02(props) {

  function giveClassName(slideId, id, dataLength) {

    if ((slideId - 1) === id) {
      return 'slide-left';
    } else if (slideId === id) {
      return 'slide-middle';
    } else if ((slideId + 1) === id) {
      return 'slide-right';
    } else if (slideId === 1) {
      return 'slide-middle'
    }
    else {
      return '';
    }
  }

  return (
    <div className={`
    set-position
    ${giveClassName(props.slide, props.id)}
    `} >
      <Media>
        <img
          style={{
            maxWidth: '100px',
            display: "flex",
            justifySelf: 'center',
            alignSelf: 'center'
          }}
          width={74}
          height={74}
          className="mr-3"
          src={props.img}
          alt={props.alt}
        />
        <Media.Body style={{ background: "#ffffff" }}>
          <h5>{props.clientName}</h5>
          <p>{props.reviewText} [ {props.slide} | {props.id} ]</p>
        </Media.Body>
      </Media>
    </div >


  )
}

export default MultiItem02
