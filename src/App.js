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
  
  nameChangedhandler = (event) => {
    this.setState({
      persons: [
        { name: "Sultan Bhai", age: "25" },
        { name: event.target.value, age: "20" },
        { name: "Muhammad Faiza", age: "19" }
      ]
    })
  }

  // delete persons

  deletePersonhandler = (personIndex) => {
      const person = this.state.persons;
      person.splice(personIndex, 1);
      this.setState({persons:person});
  }

  // rendering content conditionaly

  togglePersonHandler = () => {
    const doesshow = this.state.showPersons;
    this.setState({
      showPersons: !doesshow
    })
  }
  render() {
    let personss = null;
    if (this.state.showPersons === false) {
      personss = (
        <div>
          {this.state.persons.map((person, index) =>{
            return  <Person click={()=>this.deletePersonhandler(index)} name={person.name} age={person.age} />
          })}
        </div>
      )
    }
    return (
      <div className='App'>
        <h1>Hello This is React Application</h1>
        <button onClick={this.togglePersonHandler}>Toggle People</button>
        {personss}
      </div>
    )
  }
}