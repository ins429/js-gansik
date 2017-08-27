import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import styles from 'css/post-form.scss';

let AddPost = ({ dispatch }) => {
    let title, body;

    return (
        <form
            className="post-form"
            onSubmit={e => {
                e.preventDefault()
                if (!title.value.trim() || !body.value.trim()) {
                    return;
                }
                dispatch(addPost(title.value, body.value))
                title.value = body.value = ''
            }}
        >
            <input
                className="post-form__title-input"
                placeholder="Title"
                ref={input => title = input} />
            <input
                className="post-form__body-input"
                placeholder="Body"
                ref={input => body = input}
            />
            <button
                className="post-form__submit-button"
                type="submit"
            >
                Add Post
            </button>
        </form>
    );
};

AddPost = connect()(AddPost);

export default AddPost;
