import React, {Component} from 'react';
import Person from "./person";


class Persons extends Component{
    render(){
        return(
            <div>
                <ul className="Persons">
                {
                    this.props.data.persons.map((PersonData)=>{
                        return  <Person {... PersonData}/>
                    })
                }
                </ul>
            </div>
        );
    }
}

export default Persons;
