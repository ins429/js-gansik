import React from 'react';
import { connect } from 'react-redux';
import { cancelEditPost, updatePost } from '../actions';
import styles from 'css/post-form.scss';

let EditPost = ({ dispatch, id, title, body }) => {
    let titleInput, bodyInput;

    return (
        <form className="post-form"
            onSubmit={e => {
                e.preventDefault()
                if (!titleInput.value.trim() || !bodyInput.value.trim()) {
                    return;
                }
                dispatch(updatePost({
                    id: id,
                    title: titleInput.value,
                    body: bodyInput.value
                }))
                titleInput.value = bodyInput.value = ''
            }}
        >
            <input
                className="post-form__body-input"
                ref={input => titleInput = input}
                defaultValue={title}
            />
            <input
                className="post-form__body-input"
                ref={input => bodyInput = input}
                defaultValue={body}
            />
            <button
                className="post-form__submit-button"
                type="submit"
            >
                Update Post
            </button>
            <button
                className="post-form__cancel-button"
                onClick={e => dispatch(cancelEditPost(id))}
            >
                Cancel
            </button>
        </form>
    );
};

EditPost = connect()(EditPost);

export default EditPost;
