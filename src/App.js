import React, { Component } from 'react';
// To import Radium, in addition to StyleRoot which is a special component needed for media queries:
import Radium, { StyleRoot} from 'radium';
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

  // Using new features from Radium:
  render() {
    const style = {
      backgroundColor: 'lightblue',
      color: 'white',
      font: 'inherit',
      border: '2px solid white',
      margin: '16px auto',
      padding: '8px',
      cursor: 'pointer',
      // Pseudo selector: it needs to be wrap in '' because it starts with : and that is not a valid javascript property name.
      ':hover': {
        backgroundColor: 'lavender',
        color: 'black'
      }
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
      // And I will also overwrite hover down here where I overwrite the background color:
      style.backgroundColor = 'black';
      style[':hover'] = {
        backgroundColor: 'grey',
        color: 'black'
      }
    }

    // let classes = ['aqua', 'bold'].join(' ');
    
    const classes = []; 
    if (this.state.persons.length <= 2) {
      classes.push('aqua');
    } 
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    // Here I need to wrap the whole div with the className="App" into StyleRoot (this will wrap the entire app):
    return (
      <StyleRoot>
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
      </StyleRoot>  
    );
  }
}

// To call Radium as a function:
export default Radium(App);  // This is called a higher order component.