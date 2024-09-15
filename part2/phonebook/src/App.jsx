import { useState } from 'react'
import PersonForm from './components/person/personForm/PersonForm'
import Persons from './components/person/Persons'
import Filter from './components/person/filter/Filter'


const Title = ({text}) => {
  return (<h2>{text}</h2>)
}

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
])

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