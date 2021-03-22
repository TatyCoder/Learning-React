import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// Adding an id:
class App extends Component {
  state = {
    persons: [
      { id: 'i1', name: 'Max', age: 28 },
      { id: 'i2', name: 'Sam', age: 29 },
      { id: 'i3', name: 'Lila', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false  
    // If it is false, I don't want to show the persons.
  }

  // I'm not calling this handler anymore from anywhere in my application:
  // switchNameHandler = (newName) => {
  //   console.log('Was clicked!');
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Sam', age: 29 },
  //       { name: 'Lila', age: 27 }
  //     ]
  //   } )
  // }
  
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Lila', age: 27 }
      ]
    } )
  }

  // Adding this new handler:
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();  // Slice without arguments copies the array and returns a new one.
    const persons = [...this.state.persons];  // To create a copy of persons array before manipulating it.
    persons.splice(personIndex, 1);  // Then I create a new version of that persons array by splicing one element.
    this.setState( {persons: persons} )  // Finally I call the updated array.
  }
 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );  
   // By adding ! it sets showPersons equal to what doesShow is not: if doesShow is true it will set showPersons to false.
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

    // Now outputting this as a list, wrapping in {} all the content to render it dynamically:
    if (this.state.showPersons) {
      persons = ( // map executes on every element of an array and returns an array that contains the results.
        <div>  
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}  // The key property allows React to keep track of the individual elements.
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
