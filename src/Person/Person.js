// To import 'React':
import React from 'react'; 

// To import the styling, I need the file extension .css, I can only omit it for .js files:
import './Person.css';

// Styling this component, I simply assign the new css class to my div here:
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
}

// To export the 'person' constant which holds the function:
export default person;