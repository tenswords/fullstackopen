import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

// two cells in a row per line
const StatisticLine = ({name, value}) => (
  <tr><td>{name}</td><td>{value}</td></tr>
)

// Stats block only shown if some vote has been cast
const Statistics = ({good, neutral, bad}) => {
  const allRating = good + neutral + bad

  if (allRating === 0) {
    return "No feedback given"
  } else {
    const avgScore = (good - bad) / allRating
    const posPer = (good/allRating) * 100

    return (
      <table>
          <tbody>
            <StatisticLine name="good" value={good}/>
            <StatisticLine name="neutral" value={neutral}/>
            <StatisticLine name="bad" value={bad}/>
            <StatisticLine name="all" value={allRating}/>
            <StatisticLine name="average" value={avgScore}/>
            <StatisticLine name="positive" value={posPer + "%"}/>
          </tbody>
        </table>
    )
  }
}

const App = () => {
  // states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // handlers
  const goodRating = () => setGood(good + 1)
  const neutralRating = () => setNeutral(neutral + 1)
  const badRating = () => setBad(bad + 1)

  return (
    <div>
      <Heading text="give feedback"/>
      <Button onClick={goodRating} text="good"/>
      <Button onClick={neutralRating} text="neutral"/>
      <Button onClick={badRating} text="bad"/>
      <Heading text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App