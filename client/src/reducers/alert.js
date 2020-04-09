import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

// Reducer
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            // match alert id and return others
            return state.filter((alert) => alert.id !== payload);
        default:
            return state;
    }
}
