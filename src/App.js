import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// Adding a new property 'showPersons':
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Sam', age: 29 },
      { name: 'Lila', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false  
    // If it is false, I don't want to show the persons.
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Sam', age: 29 },
        { name: 'Lila', age: 27 }
      ]
    } )
  }
  
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Lila', age: 27 }
      ]
    } )
  }

  // Creating a new method to switch the state:
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

    let persons = null;  //  If this is not true it will render nothing.

    // Adding a conditional, wrapping in a div all the content I want to show/hide:
    if (this.state.showPersons) {  // If this is true it will render the persons.
      persons = (
        <div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Bob!!!')} 
        changed={this.nameChangedHandler}
        > Hobbies: Surfing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
      );
    }

    // Now I can output the persons variable here:
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button
          style={style}
        // To show/hide persons, now passing 'togglePersonsHandler' as a reference:
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        </div>
    );
  }
}

export default App;
