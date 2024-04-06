const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) =>
    sum + part.exercises, 0)

  return (
    <div id="total">
      Total of {total} exercises
    </div>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ content }) => 
  <div>
    {content.map(part => 
      <Part key={part.id} part={part} />
    )}
  </div>

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course