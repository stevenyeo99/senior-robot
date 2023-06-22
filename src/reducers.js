import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from "./constants";

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

const initiateFetchState = {
    isPending: true,
    robots: [],
    error: ''
};

export const fetchRobotReducers = (state = initiateFetchState, action = {}) => {
    
    const { type, payload } = action;

    switch (type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true};
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, isPending: false, robots: payload};
        case REQUEST_ROBOTS_FAILED:
            return {...state, isPending: false, error: payload}
        default:
            return state;
    }
};