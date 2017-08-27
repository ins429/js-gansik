import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import styles from 'css/comment-form.scss';

let AddComment = ({ postId, commentId, dispatch }) => {
      let comment;

      return (
          <form
              className="comment-form"
              onSubmit={e => {
                  e.preventDefault();
                  if (!comment.value.trim()) {
                      return;
                  };
                  dispatch(addComment({
                      postId,
                      commentId,
                      comment: comment.value
                  }));
                  comment.value = '';
              }}
          >
              <input
                  className="comment-form__comment-input"
                  ref={input => comment = input} />
              <button
                  className="comment-form__submit-button"
                  type="submit"
              >
                  Add Comment
              </button>
          </form>
      );
};

AddComment = connect()(AddComment);

export default AddComment;
