import { useState } from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import "./App.css"

const App = () => {
  // Test Data
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  // States
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredList, setFilteredList] = useState(persons)

  // Handlers
  const handleSearch = (e) => {
    setFilteredList(persons.filter( (person) =>
      person.name.toLowerCase().includes(
        e.target.value.toLowerCase())))
      setSearchTerm(e.target.value)
    }

  const handleNameChange = (e) => 
    setNewName(e.target.value)

  const handleNumberChange = (e) =>
    setNewNumber(e.target.value)

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
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
      <Filter value={searchTerm} onChange={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName} 
        nameHandler={handleNameChange} 
        newNumber={newNumber} 
        numberHandler={handleNumberChange} 
        onSubmit={addPerson} />
      <h3>Numbers</h3>
      <Persons list={searchTerm === '' ? persons : filteredList} />
    </div>
  )
}

export default App