import React from 'react';

 const CommentForm = props => {
     return (
        <form onSubmit={props.handleSubmit}>
            <input 
                className="comment-input" 
                type="text" 
                placeholder="Add comment..."
                value={props.comment}
                name="comment"
                onChange={props.onCommentUpdate}
            />
        </form>
    );
}

 export default CommentForm;