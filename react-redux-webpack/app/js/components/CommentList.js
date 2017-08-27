import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments, onToggleCommentInputClick, onCommentDeleteClick }) => (
    <div className="comment-list">
        {
            comments
                .map(comment => (
                    <Comment
                        key={comment.id}
                        {...comment}
                        deleteCommentHandler={() => onCommentDeleteClick(comment.id)}
                        toggleCommentInputHandler={() => onToggleCommentInputClick(comment.id)}
                    />
                ))
        }
    </div>
);

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            comment: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onCommentDeleteClick: PropTypes.func.isRequired,
    onToggleCommentInputClick: PropTypes.func.isRequired
};

export default CommentList;
