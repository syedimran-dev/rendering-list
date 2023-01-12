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

  togglePersonHandler = () =>{
    const doesshow = this.state.showPersons;
    this.setState({
      showPersons: !doesshow
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Hello This is React Application</h1>
        <button onClick={this.togglePersonHandler}>Toggle People</button>
        {this.state.showPersons === true ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person change={this.nameChangedhandler} click={() => this.setperson('its that yoou')} name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div> : null
        } 
      </div>
    )
  }
}