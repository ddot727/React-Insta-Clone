import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './PostContainer.css';

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={this.props.post.imageUrl}
        />
      </div>
      <CommentSection comments={this.props.post.comments} />
    </div>
  );
};

export default Post;