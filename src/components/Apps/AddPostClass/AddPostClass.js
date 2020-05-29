import React, { Component } from 'react';

import FormRegular from './FormRegular';



class AddPostClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <>
        <div className="apps">
          <h2>Add to post [Class]</h2>
          <FormRegular />
          {postItems}
        </div>

      </>
    )
  }
}

export default AddPostClass;
