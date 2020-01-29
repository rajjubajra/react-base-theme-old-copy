import React, { Component } from 'react'
import { combineReducers } from 'redux';



combineReducers({
  posts: postReducer
})

/** types */
const FETCH_POSTS = 'FETCH_POSTS';
const NEW_POST = 'NEW_POST';

/** postReducers */
const initialStates = {
  items: [],
  item: {}
}

function postReducer(state = initialStates, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}


function fetchPosts() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/post")
      .then(res => res.json())
      .then(posts => {
        console.log('DATA POST ?', posts);
        dispatchEvent({
          type: FETCH_POSTS,
          payload: posts
        })
      });
  }
}


class Index extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItem = this.state.posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Add to post in a single page</h1>
      </div>
    )
  }
}

export default Index
