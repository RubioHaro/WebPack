import React from 'react';

function Person(props){
    return(
        <li className="Person">
            {props.name} 
            {props.age}
        </li>
    )
}

export default Person;
