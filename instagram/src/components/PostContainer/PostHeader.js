import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          className="post-thumb"
          src={props.thumbnailUrl}
          alt="post header"
        />
      </div>
      <div className="post-username">
        {props.username}
      </div>
    </div>
  );
};

export default PostHeader;