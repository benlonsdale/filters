import { useReducer } from "react";

export const constants = {
    UPDATE_RESULTS: "UPDATE_RESULTS"
};

const resultsReducer = (state, action) => {
    switch (action.type) {
        case constants.UPDATE_RESULTS: {
            return {
                ...state,
                hotels: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export const useResults = () => {
    const [state, dispatch] = useReducer(resultsReducer, {
        hotels: [],
    });

    return {
        state,
        dispatch
    };
};
