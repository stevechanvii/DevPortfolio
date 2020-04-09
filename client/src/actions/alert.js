import uuid from 'uuid/v4';
import { SET_ALERT, REMOVE_ALERT } from './types';

// Action alert
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id },
    });

    // 5 seconds it will dispatch remove alert
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
