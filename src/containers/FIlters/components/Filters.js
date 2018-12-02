import React from 'react'
import Facilities from './Facilities';
import {constants} from '../reducer';

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
        </div>
    )
}
