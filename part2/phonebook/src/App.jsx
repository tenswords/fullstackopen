import { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import personService from './services/persons'
import "./App.css"

const App = () => {
  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredList, setFilteredList] = useState(persons)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  } , [])

  // Handlers
  const handleSearch = (e) => {
    setFilteredList(persons.filter(person =>
      person.name.toLowerCase().includes(
        e.target.value.toLowerCase()
      )))
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
    }
    
    if (persons.some((x) => x.name === newName)) {
      if (confirm(`${newName} is already added to the phonebook. ` +
        `Replace the old number with a new one?`)) {
          const toChange = persons.find(person => 
            person.name === newPerson.name)
          const changedPerson = {...toChange, number: newPerson.number}
          personService
            .update(changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(origPerson => {
                if (returnedPerson.id === origPerson.id)
                  return returnedPerson
                else
                  return origPerson
              }))
              setNewName('')
              setNewNumber('')
            })
        }
    } else {
      personService
        .create(newPerson)
        .then(returnedPerson => { 
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removePerson = (delPerson) => {
    if (confirm(`Delete ${delPerson.name}?`)) {
      personService
      .remove(delPerson.id)
      .then(() => {
        setPersons(persons.filter( person => person.id !== delPerson.id))
        })
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
      <Persons 
        list={searchTerm === '' ? persons : filteredList} 
        removeHandler={removePerson} />
    </div>
  )
}

export default App