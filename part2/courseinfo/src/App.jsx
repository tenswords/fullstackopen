const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ content }) => 
  <>
    {content.map(part => 
      <Part key={part.id} part={part} />
    )}
  </>

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      // {
      //   name: 'Test',
      //   exercises: 12,
      //   id: 4
      // }
    ]
  }

  return <Course course={course} />
}

export default App