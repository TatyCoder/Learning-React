import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Importing Person:
import Person from './Person/Person';

// Using Person:
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Person name='Max' age='28' />
        <Person name='Sam' age='29' > Hobbies: Surfing</Person>
        <Person name='Lila' age='27' />
      </div>
    );
  }
}

export default App;
