import React, { Component } from 'react'
import './App.css'
import Person from './component/person'

export default class App extends Component {
  state = {
    persons: [
      { name: "Sultan Ali", age: "24" },
      { name: "Muhammad Imran", age: "19" },
      { name: "Muhammad Faizan", age: "18" }
    ],
    showPersons: false
  }
  setperson = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "25" },
        { name: "Muhammad Imran", age: "20" },
        { name: "Muhammad Faiza", age: "19" }
      ]
    })
  }

  nameChangedhandler = (event) => {
    this.setState({
      persons: [
        { name: "Sultan Bhai", age: "25" },
        { name: event.target.value, age: "20" },
        { name: "Muhammad Faiza", age: "19" }
      ]
    })
  }

  // rendering content conditionaly

  togglePersonHandler = () => {
    const doesshow = this.state.showPersons;
    this.setState({
      showPersons: !doesshow
    })
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person =>{
            return  <Person name={person.name} age={person.age} />
          })}
        </div>
      )
    }
    return (
      <div className='App'>
        <h1>Hello This is React Application</h1>
        <button onClick={this.togglePersonHandler}>Toggle People</button>
        {persons}
      </div>
    )
  }
}