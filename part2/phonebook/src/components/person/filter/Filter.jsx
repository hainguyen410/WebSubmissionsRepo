const Filter = ({newFilter, setNewFilter}) => {
    return (
        <input value={newFilter} onChange={(e) => setNewFilter(e.target.value)}/>
    )
}

export default Filter;