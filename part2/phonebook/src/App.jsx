import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/person/personForm/PersonForm'
import Persons from './components/person/Persons'
import Filter from './components/person/filter/Filter'


const Title = ({text}) => {
  return (<h2>{text}</h2>)
}

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        console.log("promises fulfilled")
        setPersons(response.data)
      })
  }, [])
  
  return (
    <div>
      <Title text="Phonebook"/>
      filter shown with <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>

      <Title text="Add a new"/>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <Title text="Number"/>
      <Persons persons={persons} newFilter={newFilter}/>

        
    </div>
  )
}

export default App