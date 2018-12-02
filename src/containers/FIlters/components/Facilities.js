import React from 'react';
import Checkbox from '../../../components/Checkbox';

export default ({removeFacility, addFacility}) => {
    return (
        <div>
            <Checkbox 
                label="Car Park" 
                value="car park" 
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
                value="pool" 
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
                value="gym" 
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


