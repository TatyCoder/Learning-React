import React from 'react'; 
// To import Radium:
import Radium from 'radium';

import './Person.css';

// Adding a new const to use media queries from Radium:
const person = (props) => {
    const style = {
        '@media (min-widht: 500px)': {
            width: '450px'
        }
    }
    // Assigning the style here, which will overwrite my class setting, by default css rules not because of Radium:
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
}

// // To call Radium as a function:
export default Radium(person);