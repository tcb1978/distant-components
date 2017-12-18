import { createStore } from "redux";

const reducer = state => state;

const initial_state = {
    loggedInAs: '',
    isCreditCardHolder: false,
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = initial_state, action) => {
    switch (action.type) {
        case Action:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
};