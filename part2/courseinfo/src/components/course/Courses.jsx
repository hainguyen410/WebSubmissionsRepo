import Header from "./header/header"
import Content from "./content/Content"

const Courses = ({courses}) => {
    return (<div>
        <h1>Web Development Curriculum</h1>
        {courses.map((course) => <div key={course.id}>
            <Header text={course.name}/>
            <Content parts={course.parts}/>
        </div>    
        )}
    </div>)
}

export default Courses