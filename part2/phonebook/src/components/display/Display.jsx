const Display = ({person, deletePhone}) => {
    return <p>{person.name} {person.phone} <button onClick={deletePhone}>Delete</button> </p>
}

export default Display