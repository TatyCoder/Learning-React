// To import 'React':
import React from 'react'; 

// Using onClick to change a name when clicking the paragraph, I simply call props.click (property defined in App.js):
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} />
        </div>
    )
}
// Another way for changing the name is 'onChange', it will be fired whenever the value in this input changes.

// To export the 'person' constant which holds the function:
export default person;