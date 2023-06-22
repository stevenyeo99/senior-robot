import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

export const setSearchField = (value) => (
    {
        type: CHANGE_SEARCH_FIELD,
        payload: value
    }
);

export const fetchRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: result}))
        .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}));
};