import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    searchValue: ''
};

export const robotReducers = (state = initialState, action = {}) => {

    const { type, payload } = action;

    switch (type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchValue: payload};
        default:
            return state;
    }
};