import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Importing Person:
import Person from './Person/Person';

// Using Person:
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Sam', age: 29 },
      { name: 'Lila', age: 27 }
    ],
    otherState: 'some other value'
  }

  // Now passing a value 'newName' to this function:
  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    // This is a method which allows to update the state property. It takes an object as an argument:
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Sam', age: 29 },
        { name: 'Lila', age: 27 }
      ]
    } )
  }
  // setState will merge/overwrite the old state with the new one. It will leave otherState untouched.

  // Adding a new handler to change the name using an event:
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Lila', age: 27 }
      ]
    } )
  }

  // Changes to pass the newName data using two different ways -> arrow function (inefficient) or bind (recommended):
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={() => this.switchNameHandler('Bob')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        // Adding a new property 'click', passing 'switchNameHandler' as a reference:
        click={this.switchNameHandler.bind(this, 'Bob!!!')} 
        // Adding another property 'changed', passing 'nameChangeHandler' as a reference:
        changed={this.nameChangedHandler}
        > Hobbies: Surfing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
