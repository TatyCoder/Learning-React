import React from 'react'; 
// To import styled:
import styled from 'styled-components';

// import './Person.css';  // I won't import this anymore.

// Creating a new component where I copied all the style properties from Person.css (without the .Person selectors):
const StyledDiv = styled.div `
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-widht: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    // I don't need this anymore:
    // const style = {
    //     '@media (min-widht: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        // <div className='Person' style={style}>  
        // Instead of that I will return <StyledDiv> as a regular React component:
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

export default person;