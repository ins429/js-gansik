import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import EditPost from '../containers/EditPost';

const PostList = ({ posts, onPostDeleteClick, onPostEditClick, onToggleCommentInputClick }) => (
    <div className="post-list">
        {
            posts.map(post => (
                post.action === 'edit' ?
                <EditPost
                    key={post.id}
                    {...post}
                /> :
                <Post
                    key={post.id}
                    {...post}
                    editPostHandler={() => onPostEditClick(post.id)}
                    deletePostHandler={() => onPostDeleteClick(post.id)}
                    toggleCommentInputHandler={() => onToggleCommentInputClick(post.id)}
                />
            ))
        }
    </div>
);

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    ).isRequired,
    onPostDeleteClick: PropTypes.func.isRequired,
    onToggleCommentInputClick: PropTypes.func.isRequired
};

export default PostList;
