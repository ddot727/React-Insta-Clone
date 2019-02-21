import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostContainer = props => {
    return (
      <div className="post-container-wrapper">
        {props.data.map(p => 
        <Post post={p} key={p.imageUrl} />)}
      </div>
    );
  };
  

export default PostContainer;