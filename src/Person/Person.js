// To import 'React':
import React from 'react'; 

// Creating an arrow function:
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

// To export the 'person' constant which holds the function:
export default person;