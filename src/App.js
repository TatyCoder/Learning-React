import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'i1', name: 'Max', age: 28 },
      { id: 'i2', name: 'Sam', age: 29 },
      { id: 'i3', name: 'Lila', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // Updating this handler to work with flexible lists:
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {  // To update the state for the person to which the input belongs. 
      return p.id === id;  // This returns true. 
      // This function is executed for every element in the array.
    });

    const person = {  // Creating a new object to get the person which id returns true.
      ...this.state.persons[personIndex]  // Using the spread operator to not manipulate the original object.
    };

    person.name = event.target.value;  // To update the person name and setting it to value.

    const persons = [...this.state.persons];  // To create a copy of persons array before manipulating it.
    persons[personIndex] = person;  // To update the array at one position, here should now be the updated person.
 
    this.setState( {persons: persons} )  // To set the state to the updated persons array.
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( {persons: persons} )
  }
 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );  
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid lightblue',
      margin: '16px auto',
      padding: '8px',
      cursor: 'pointer'
    }

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
              // Adding the changed property pointing to the handler which correctly updates the state:
              changed={(event) => this.nameChangedHandler(event, person.id)}  
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        </div>
    );
  }
}

export default App;
