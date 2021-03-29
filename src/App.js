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
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });  
  }

  render() {
    const style = {
      backgroundColor: 'lightblue',
      color: 'white',
      font: 'inherit',
      border: '2px solid white',
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
              changed={(event) => this.nameChangedHandler(event, person.id)}  
            />
          })}
        </div>
      );
      style.backgroundColor = 'black';
    }

    // Creating a new variable:
    // let classes = ['aqua', 'bold'].join(' ');  // This will turn an array of strings into one string aqua bold.
    // Adding a dynamic nature to that variable:
    const classes = [];  // I can use const here because I'm never assigning a new value.
    if (this.state.persons.length <= 2) {
      classes.push('aqua');  // To push the aqua class onto this array --> classes = ['aqua'].
    }  // Another if statement, not else:
    if (this.state.persons.length <= 1) {
      classes.push('bold');  // classes = ['aqua', 'bold'].
    }

    // Setting the class name of the paragraph dynamically depending on the length of the elements in person's array:
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        </div>
    );
  }
}

export default App;
