let nextPostId = 1;
let nextCommentId = 1;

export const addPost = (title, body) => {
    return {
        type: 'ADD_POST',
        id: nextPostId++,
        isCommentInputVisible: false,
        title,
        body
    };
};

export const editPost = id => {
    return {
        type: 'EDIT_POST',
        id
    };
};

export const cancelEditPost = id => {
    return {
        type: 'CANCEL_EDIT_POST',
        id
    };
};

export const updatePost = ({ id, title, body }) => {
    return {
        type: 'UPDATE_POST',
        id,
        title,
        body
    };
};

export const deletePost = id => {
    return {
        type: 'DELETE_POST',
        id
    };
};

export const toggleCommentInput = id => {
    return {
        type: 'TOGGLE_COMMENT_INPUT',
        id
    };
};

export const addComment = ({postId, commentId, comment}) => {
    return {
        type: 'ADD_COMMENT',
        id: nextCommentId++,
        postId,
        commentId,
        comment
    };
};

export const deleteComment = id => {
    return {
        type: 'DELETE_COMMENT',
        id
    };
};
