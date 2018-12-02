import React from 'react'
import Facilities from './Facilities';
import {constants} from '../reducer';
import StarRatings from './StarRatings';

export default ({state, dispatch}) => {



    return (
        <div>
            <Facilities 
                facilities={state.facilities}
                addFacility={(added) => {
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            facilities: [...state.facilities, added]
                        }
                    })
                }}
                removeFacility={(removed) => {
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            facilities: state.facilities.filter(item => removed !== item)
                        }
                    })
                }}
            />
            
            <StarRatings            
                starRatings={state.starRatings}
                add={(added) => {
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            starRatings: [...state.starRatings, added]
                        }
                    })
                }}
                remove={(removed) => {
                    dispatch({
                        type: constants.UPDATE,
                        payload: {
                            starRatings: state.starRatings.filter(item => removed !== item)
                        }
                    })
                }}
            />
        </div>
    )
}
