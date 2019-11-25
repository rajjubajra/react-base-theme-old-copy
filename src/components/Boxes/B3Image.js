import React from 'react';


const B3Image = ({imgsrc}) => {
  console.log(imgsrc);
  return (
    <div>
      <div className="b3image"><img src={imgsrc}  alt="b3img"></img></div>
    </div>
  )
}

export default B3Image
