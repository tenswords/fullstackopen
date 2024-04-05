import { useState } from 'react'

// components
const Heading = ({text}) => <h2>{text}</h2>

const Anecdote = ({anecdote, votes}) => (
  <>  
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </>
)

const BestAnecdote = ({anecdotes, votes}) => {
  const maxVotes = Math.max(...votes)
  const maxIndex = votes.indexOf(maxVotes)

  if (maxVotes === 0) {
    return (
      <>
        TBD
      </>
    )
  } else {
    return <Anecdote anecdote={anecdotes[maxIndex]} votes={votes[maxIndex]}/>
  }
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  // state
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // button handlers
  const nextAnecdote = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))
  const incrementVote = () => {
    // make new array, modify, replace state array
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)    
  }

  return (
    <div>
      <Heading text="Anecdote of the day"/>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>      
      <Button onClick={incrementVote} text="vote"/>
      <Button onClick={nextAnecdote} text={"next anecdote"}/>
      <Heading text="Anecdote with the most votes"/>
      <BestAnecdote anecdotes={anecdotes} votes={votes}/>  
    </div>
  )
}

export default App