import { GET_POST, POST_ERROR, UPDATE_LIKES } from './types';
import { setAlert } from './alert';
import axios from 'axios';

// Get posts
export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POST,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};

// Add like
export const addLike = (postId) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data },
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};

// Remove like
export const removeLike = (postId) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data },
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};
