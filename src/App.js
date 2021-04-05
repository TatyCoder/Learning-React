import React, { Component } from 'react';
// To import styled:
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// Creating a new const where I copied all the style properties from const style (in regular css syntax) and using the new prop:
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'black' : 'lightblue'};
  color: white;
  font: inherit;
  border: 2px solid white;
  margin: 16px auto;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'grey' : 'lavender'};
    color: black
  }  
`;

class App extends Component {
  state = {
    persons: [
      { id: 'i1', name: 'Max', age: 28 },
      { id: 'i2', name: 'Sam', age: 29 },
      { id: 'i3', name: 'Lila', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {   
      return p.id === id; 
    });

    const person = {  
      ...this.state.persons[personIndex]  
    };

    person.name = event.target.value;  

    const persons = [...this.state.persons];  
    persons[personIndex] = person;  
 
    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };
 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });  
  };

  render() {
    // I don't use this anymore:
    // const style = {
    //   backgroundColor: 'lightblue',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '2px solid white',
    //   margin: '16px auto',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lavender',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = ( 
        <div>  
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}  
            />
          })}
        </div>
      );
      // I can't use this to change styles conditionally when using styled components:
      // style.backgroundColor = 'black';
      // style[':hover'] = {
      //   backgroundColor: 'grey',
      //   color: 'black'
      // };
    }

    // let classes = ['aqua', 'bold'].join(' ');
    
    const classes = []; 
    if (this.state.persons.length <= 2) {
      classes.push('aqua');
    } 
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    // Here I need to replace button with StyledButton and pass a new prop 'alt', I don't apply the inline style anymore:
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          // style={style}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>
        {persons}
        </div>  
    );
  }
}

export default App;