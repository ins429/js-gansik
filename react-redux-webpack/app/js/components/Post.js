import React from 'react';
import PropTypes from 'prop-types';
import Comments from 'js/containers/Comments';
import AddComment from 'js/containers/AddComment';
import styles from 'css/post.scss';

const Post = ({
    id,
    title,
    body,
    editPostHandler,
    deletePostHandler,
    isCommentInputVisible,
    toggleCommentInputHandler
}) => (
    <div className="post">
        <p className="post__title">{title}</p>
        <p className="post__body">{body}</p>
        <button className="post__edit-button" onClick={editPostHandler}>Edit</button>
        <button className="post__delete-button" onClick={deletePostHandler}>Delete</button>
        {
            isCommentInputVisible ?
                <AddComment postId={id} /> :
                <button
                    className="post__add-comment-button"
                    onClick={toggleCommentInputHandler}
                >
                    Add Comment
                </button>
        }
        <Comments postId={id} />
    </div>
);

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    editPostHandler: PropTypes.func.isRequired,
    deletePostHandler: PropTypes.func.isRequired,
    isCommentInputVisible: PropTypes.bool.isRequired
};

export default Post;
