import { useReducer } from "react";

export const constants = {
    UPDATE: "UPDATE"
};

const filterReducer = (state, action) => {
    switch (action.type) {
        case constants.UPDATE: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export const useFilters = () => {
    const [state, dispatch] = useReducer(filterReducer, {
        facilities: [],
        starRating: [],
        name: ""
    });

    return {
        state,
        dispatch
    };
};
