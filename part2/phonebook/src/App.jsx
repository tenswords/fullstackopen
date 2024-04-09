import { useState } from 'react'
import NumberList from "./components/NumberList"
import "./App.css"

const App = () => {
  // Test Data
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  // State
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredList,  setFilteredList] = useState(persons)

  // Handlers
  const handleSearch = (e) => {
    setFilteredList(persons.filter( (person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())))
    setSearchTerm(e.target.value)
  }

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

  // App
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          Filter shown with: <input value={searchTerm} onChange={
            e => handleSearch(e)
          } />
        </div>
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={
            e => setNewName(e.target.value)
          } />
        </div>
        <div>
          Number: <input value={newNumber} onChange={
            e => setNewNumber(e.target.value)
          } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
          <NumberList list={filteredList} />
    </div>
  )
}

export default App