import React from "react";
import Facilities from "./Facilities";
import { constants } from "../reducer";
import StarRatings from "./StarRatings";

export default ({ state, dispatch }) => {
    return (
        <div>
            <h4>Name</h4>
            <input
                value={state.name}
                onChange={e =>
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            name: e.target.value
                        }
                    })
                }
            />
            <h4>Facilities</h4>
            <Facilities
                facilities={state.facilities}
                addFacility={added => {
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            facilities: [...state.facilities, added]
                        }
                    });
                }}
                removeFacility={removed => {
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            facilities: state.facilities.filter(
                                item => removed !== item
                            )
                        }
                    });
                }}
            />
            <h4>Stars</h4>
            <StarRatings
                starRating={state.starRating}
                add={added => {
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            starRating: [...state.starRating, added]
                        }
                    });
                }}
                remove={removed => {
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            starRating: state.starRating.filter(
                                item => removed !== item
                            )
                        }
                    });
                }}
            />
        </div>
    );
};
