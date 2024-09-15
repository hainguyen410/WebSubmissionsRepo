import Display from "../display/Display"
const Persons = ({persons, newFilter}) => {
    
    return (<div>
        {persons.map((person) => {
            if (person.name.toLowerCase().includes(newFilter.toLowerCase())) {
              return <Display key={person.name} person={person}/>
            }
            
          })}
    </div>
        
    )
}

export default Persons;

