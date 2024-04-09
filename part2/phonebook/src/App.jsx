import { useState } from 'react'
import NumberList from "./components/NumberList"
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    
    if (persons.some( (x) => x.name === newName ))
      alert(`${newName} is already added to the phonebook`)
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={
            e => setNewName(e.target.value)
          } />
        </div>
        <div>
        number: <input value={newNumber} onChange={
            e => setNewNumber(e.target.value)
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