import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
        }
    }
    
    onCommentUpdate = e => {
        this.setState({
            comment: e.target.value,
        })
    }
    
    handleSubmit = e => {
        debugger
        e.preventDefault();
        const newComment = {
            username: 'Dat Boi',
            text: this.state.comment,
        }
        const comments = [...this.state.comments]
        comments.push(newComment)
        this.setState({ comments, comment: ''  })
    }
    
    render() {
        return (
            <div className="comment-section-container">
            <a href="#">#</a>
            <a href="#">#</a>
            
            {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
            <CommentForm 
                comment={this.state.comment}
                onCommentUpdate={this.onCommentUpdate} 
                handleSubmit={this.handleSubmit} 
            />
            </div>
            )
        }
    }
    
    CommentSection.propTypes = {
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                text:PropTypes.string,
                username: PropTypes.string
            })
            )
        }
        
        export default CommentSection;