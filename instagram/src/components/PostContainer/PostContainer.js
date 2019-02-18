import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
    return(
      <div className='post-container'>
        <header>
          <img src={props.data.thumbnailUrl} alt="User Thumbnail"/>
          <p> {props.data.username} </p>
        </header>
        <img className='post' src={props.data.imageUrl} alt="Post"/>
        <CommentSection data={props.data}/>
      </div>
    )
  }
  
  export default PostContainer;