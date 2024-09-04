const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Content = (props) => {
  return (<p>{props.part} {props.exercises}</p>)
}

const Total = (props) => {
  return (<p>Number of Exercises {props.total}</p>)
}
  
const App = () => {
  const course = {
    name: 'Half Stack application development',
    part :[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
 

  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.part[0].name} exercises={course.part[0].exercises}/>
      <Content part={course.part[1].name} exercises={course.part[1].exercises}/>
      <Content part={course.part[2].name} exercises={course.part[2].exercises}/>
      
      <Total total={course.part[0].exercises + course.part[1].exercises + course.part[2].exercises}/>
    </div>
  )
}

export default App