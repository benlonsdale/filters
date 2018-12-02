import React from 'react';
import Checkbox from '../../../components/Checkbox';

export default ({remove, add}) => {
    return (
        <div>
            <Checkbox 
                label="1" 
                value={1}
                onChange={(e) => {
                    if(e.target.checked){
                        add(1);
                    }else{
                        remove(1);
                    }
                }}
            />
            <Checkbox 
                label="2" 
                value={2}
                onChange={(e) => {
                    if(e.target.checked){
                        add(2);
                    }else{
                        remove(2);
                    }
                }}
            />
            <Checkbox 
                label="3" 
                value={3}
                onChange={(e) => {
                    if(e.target.checked){
                        add(3);
                    }else{
                        remove(3);
                    }
                }}
            />    
            <Checkbox 
                label="4" 
                value={4}
                onChange={(e) => {
                    if(e.target.checked){
                        add(4);
                    }else{
                        remove(4);
                    }
                }}
            />
            <Checkbox 
                label="5" 
                value={5}
                onChange={(e) => {
                    if(e.target.checked){
                        add(5);
                    }else{
                        remove(5);
                    }
                }}
            />
        </div>
    )
}


