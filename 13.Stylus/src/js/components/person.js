import React from 'react';
import '../../css/person.styl'

function Person(props){
    return(
        <li className="Person">
            {props.name} 
            {props.age}
        </li>
    )
}

export default Person;
