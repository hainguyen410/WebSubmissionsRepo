import { useState } from "react"
import phoneService from "../../services/phone"

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const addPerson = (e) => {
        e.preventDefault()
        
        //check if this person already added or not
        if (persons.some((person) => {
            return person.name === newName
        })) {
            alert(`${newName} is already added to phonebook`)
            return;
        }

        const newPerson = {name: newName, number: newPhone}

        phoneService
          .addPhone(newPerson)
          .then(response => {
            console.log(response.data)
            
          })
        // setPersons([...persons, {name: newName, phone: newPhone }])
        }
    
    return (<form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value) }/>
          phone: <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {newName} and {newPhone}</div>
      </form>)
}

export default PersonForm;