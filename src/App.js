import React, { Component } from 'react'
import './App.css'
import Person from './component/person'

export default class App extends Component {
  state = {
    persons: [
      {id: 'name1',  name: "Sultan Ali", age: "24" },
      {id: 'name2',  name: "Muhammad Imran", age: "19" },
      {id: 'name3',  name: "Muhammad Faizan", age: "18" }
    ],
    showPersons: false
  }

  nameChangedhandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

   person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  // delete persons

  deletePersonhandler = (personIndex) => {
    // const person = this.state.persons;
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  }

  // rendering content conditionaly

  togglePersonHandler = () => {
    const doesshow = this.state.showPersons;
    this.setState({
      showPersons: !doesshow
    })
  }
  render() {
    const style={
          backgroundColor : "red"
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    let personss = null;
    if (this.state.showPersons === false) {
      personss = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person change={(event)=> this.nameChangedhandler(event, person.id)} click={() => this.deletePersonhandler(index)} key={person.id} name={person.name} age={person.age} />
          })}
        </div>
      )
      style.backgroundColor = "yellow"
    }
    return (
      <div className='App'>
        <h1>Hello This is React Application</h1>
        <p className={classes.join(' ')}>Its working perfectly</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle People</button>
        {personss}
      </div>
    )
  }
}