import React from 'react';

export default function Iframe(props) {

  //console.log("IFRAME URI", props.iframe_uri);

  let frame = `<iframe src=${props.iframe_uri}?autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`

  function iFrame() {
    return {
      __html: frame
    }
  }

  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "100vh", zIndex: "-99" }}
        dangerouslySetInnerHTML={iFrame()} />
    </div>
  )
}