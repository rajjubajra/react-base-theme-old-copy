import React from 'react'

function text(props) {

  function createMarkup(text) {
    return { __html: text };
  }

  return (
    <div className="paragraph py-4 w-75">
      <div dangerouslySetInnerHTML={createMarkup(props.text)} className="para" />
    </div>

  )
}

export default text
