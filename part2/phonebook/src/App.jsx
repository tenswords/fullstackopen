import { useState } from 'react'
import NumberList from "./components/NumberList"
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    
    if (persons.some( (x) => x.name === newName ))
      alert(`${newName} is already added to the phonebook`)
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={
            e => setNewName(e.target.value)
          } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
          <NumberList list={persons} />
    </div>
  )
}

export default App