const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    id: action.id,
                    postId: action.postId,
                    commentId: action.commentId,
                    comment: action.comment,
                    isCommentInputVisible: false,
                }
            ];
        case 'DELETE_COMMENT':
            return state.filter(comment => comment.id !== action.id);
        case 'TOGGLE_COMMENT_INPUT':
            return state.map(comment => {
                comment.isCommentInputVisible = comment.id === action.id;
                return comment;
            });
        default:
            return state;
    }
};

export default comments;
