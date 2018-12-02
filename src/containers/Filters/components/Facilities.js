import React from 'react';
import Checkbox from '../../../components/Checkbox';

export default ({removeFacility, addFacility}) => {
    return (
        <div>
            <Checkbox 
                label="Car Park" 
                name="car park" 
                onChange={(e) => {
                    if(e.target.checked){
                        addFacility("car park");
                    }else{
                        removeFacility("car park");
                    }
                }}
            />
            <Checkbox 
                label="Pool" 
                name="pool" 
                onChange={(e) => {
                    if(e.target.checked){
                        addFacility("pool");
                    }else{
                        removeFacility("pool");
                    }
                }}
            />
            <Checkbox 
                label="Gym" 
                name="gym" 
                onChange={(e) => {
                    if(e.target.checked){
                        addFacility("gym");
                    }else{
                        removeFacility("gym");
                    }
                }}
            />        
        </div>
    )
}


