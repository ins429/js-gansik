import React from 'react';
import PropTypes from 'prop-types';
import styles from 'css/comment.scss';
import Comments from '../containers/Comments';
import AddComment from '../containers/AddComment';

const Comment = ({
    id,
    commentId,
    postId,
    comment,
    deleteCommentHandler,
    toggleCommentInputHandler,
    isCommentInputVisible,
}) => (
    <div className="comment">
        <p className="comment__comment">{commentId} {comment}</p>
        <button className="comment__delete-button" onClick={deleteCommentHandler}>Delete</button>
        {
            isCommentInputVisible ?
                <AddComment postId={postId} commentId={id} /> :
                <button
                    className="comment__add-comment-button"
                    onClick={toggleCommentInputHandler}
                >
                    Add Comment
                </button>
        }
        <Comments postId={postId} commentId={id} isNestedComment />
    </div>
);

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    deleteCommentHandler: PropTypes.func.isRequired
};

export default Comment;
