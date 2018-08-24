import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

class Posts extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.newPost) {
    //   this.props.posts.unshift(nextProps.newPost);
    // }
  }

  render() {
    const { posts, onRequestData } = this.props;
    const postItems = (posts || []).map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <button onClick={onRequestData}>Request Data</button>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let obj = {
    posts: state.posts.items,
    status: state.posts.status
  };
  console.log("obj : ", state)
  return obj
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestData: () => {
      return dispatch({ type: "FETCH_POSTS" })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);