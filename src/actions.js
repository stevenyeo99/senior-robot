import { CHANGE_SEARCH_FIELD } from "./constants"

export const setSearchField = (value) => (
    {
        type: CHANGE_SEARCH_FIELD,
        payload: value
    }
);