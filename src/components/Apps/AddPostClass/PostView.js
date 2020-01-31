import React from 'react'

const PostView = (props) => {
  return (
    <div className="post-view">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default PostView
