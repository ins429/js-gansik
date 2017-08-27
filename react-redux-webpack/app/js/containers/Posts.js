import { connect } from 'react-redux';
import { deletePost, editPost, cancelEditPost, updatePost, toggleCommentInput } from '../actions';
import PostList from '../components/PostList';

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.map(post => post)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPostDeleteClick: id => {
            dispatch(deletePost(id));
        },
        onPostEditClick: id => {
            dispatch(editPost(id));
        },
        onToggleCommentInputClick: id => {
            dispatch(toggleCommentInput(id));
        }
    };
};

const Posts = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);

export default Posts;
