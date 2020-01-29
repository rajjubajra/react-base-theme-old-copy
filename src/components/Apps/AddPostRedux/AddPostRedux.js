import React, { Component } from 'react';
import CopyRightFooter from '../../Footers/CopyRightFooter';
import FormRegular from './FormRegular';
import fetchPosts from '../../../redux/actions/postAction';
import { connect } from 'react-redux';



class AddPostRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(data => this.setState({ posts: data }));

    this.props.fetchPosts();
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
          <FormRegular />
          <h2>Add to post [Redux]</h2>
          {postItems}
        </div>
        <CopyRightFooter />
      </>
    )
  }
}
const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(AddPostRedux);
