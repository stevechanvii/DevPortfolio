import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
} from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false,
            };
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false,
            };
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false,
            };
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case UPDATE_LIKES:
            return {
                ...state,
                // map through the state the posts, check if it matches the post id, return new state with all that post
                posts: state.posts.map((post) =>
                    post._id === payload.postId ? { ...post, likes: payload.likes } : post
                ),
                loading: false,
            };
        case DELETE_POST:
            return {
                ...state,
                // return all posts except for the one that matches with postId
                posts: state.posts.filter((post) => post._id !== payload),
                loading: false,
            };
        case ADD_COMMENT:
            return {
                ...state,
                post: { ...state.post, comments: payload },
                loading: false,
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: state.post.comments.filter((comment) => comment._id !== payload),
                },
                loading: false,
            };
        default:
            return state;
    }
}
