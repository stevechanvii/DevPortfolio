import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    GET_PROFILES,
    GET_REPOS,
} from '../actions/types';

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_PROFILE:
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false,
            };
        case GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null,
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false,
            };
        default:
            return state;
    }
}
