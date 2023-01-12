import React from 'react'
import './person.css'

const Person = (props) => {
  return (
    <div className='Person'>
    <h1 onClick={props.click}>I'm {props.name} and My age is {props.age}</h1>
    <input onChange={props.change} value={props.name} />
    </div>
  )
}

export default Person
