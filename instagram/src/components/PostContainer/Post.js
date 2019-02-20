import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './PostContainer.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.data.likes
    }
  }
  addLike = () => {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() { 
    return (
      <div className="post-border">
        <PostHeader
          username={this.props.data.username}
          thumbnailUrl={this.props.data.thumbnailUrl}
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.data.imageUrl}
          />
        </div>
        <CommentSection 
          comments={this.props.data.comments} 
          />
      </div>
    );
  };
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
  })
}

export default Post;