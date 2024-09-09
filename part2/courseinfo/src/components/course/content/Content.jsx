const Content = ({parts}) => {

    return (<div>
        {parts.map((part)=><p key={part.id}>{part.name} {part.exercises}</p>)}
        <b>total of {parts.reduce((sum,part)=>sum+part.exercises,0)} exercises</b>
    </div>)
}

export default Content;