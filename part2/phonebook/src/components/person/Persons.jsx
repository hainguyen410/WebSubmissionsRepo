import Display from "../display/Display"
import phoneService from "../services/phone"


const deletePhone = (account_id) => {
  if(window.confirm("Do you really want to delete?")){
    phoneService.deletePhone(account_id)
  }
}
const Persons = ({persons, newFilter}) => {
    
    return (<div>
        {persons.map((person) => {
            if (person.name.toLowerCase().includes(newFilter.toLowerCase())) {
              return <Display key={person.id} person={person} deletePhone={() => deletePhone(person.id)}/>
            }
            
          })}
    </div>
        
    )
}

export default Persons;

