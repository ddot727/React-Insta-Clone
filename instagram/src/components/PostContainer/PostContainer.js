import React, { Component } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './PostContainer.css';

class PostContainer extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((post, index) => {

          if (this.props.postsFound.length === 0 || post.username.includes(this.props.postsFound)) {
            return <Post post={post} key={index} />
          } return null;
        })}
      </div>
      
      
      
    );
    debugger
  };
  
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
      thumbnailUrl: PropTypes.string,
      username: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number
  }))
}

export default PostContainer;