const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    body: action.body,
                    action: 'show',
                    isCommentInputVisible: action.isCommentInputVisible
                }
            ];
        case 'CANCEL_EDIT_POST':
            return state.map(post => {
                if (post.id === action.id) {
                    return Object.assign({}, post, {action: 'show'});
                } else {
                    return post;
                }
            });
        case 'EDIT_POST':
            return state.map(post => {
                if (post.id === action.id) {
                    return Object.assign({}, post, {action: 'edit'});
                } else {
                    return post;
                }
            });
        case 'UPDATE_POST':
            return state.map(post => {
                if (post.id === action.id) {
                    return {
                        id: action.id,
                        title: action.title,
                        body: action.body,
                        isCommentInputVisible: false
                    };
                } else {
                    return post;
                }
            });
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.id);
        case 'TOGGLE_COMMENT_INPUT':
            return state.map(post => {
                post.isCommentInputVisible = post.id === action.id;
                return post;
            });
        default:
            return state;
    }
};

export default posts;
