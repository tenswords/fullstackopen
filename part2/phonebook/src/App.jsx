import { useState, useEffect } from 'react'
import axios from "axios"
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import "./App.css"

const App = () => {
  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredList, setFilteredList] = useState(persons)

  useEffect( () => {
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        setPersons(response.data)
      })
  } ,[] )

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