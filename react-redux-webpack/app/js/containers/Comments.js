import { connect } from 'react-redux';
import { deleteComment, toggleCommentInput } from '../actions';
import CommentList from '../components/CommentList';

const mapDispatchToProps = dispatch => {
    return {
        onCommentDeleteClick: id => {
            dispatch(deleteComment(id))
        },
        onToggleCommentInputClick: id => {
            dispatch(toggleCommentInput(id))
        }
    };
};

const mapStateToProps = ({ comments }, { postId, isNestedComment, commentId }) => {
    const foo = {
        comments: isNestedComment ?
            commentId ?
            comments.filter(comment => comment.postId === postId && comment.commentId === commentId) :
            [] :
            comments.filter(comment => comment.postId === postId && !comment.commentId)
    };
    console.log(postId, isNestedComment, commentId, comments, foo)
    return foo
};

const Comments = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList);

export default Comments;
