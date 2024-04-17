import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountryDisplay from './components/CountryDisplay'
import countryService from './services/countries'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [fullList, setFullList] = useState(null)
  const [filteredList, setFilteredList] = useState(null)

  useEffect( () => {
    countryService
      .getAll()
      .then(fullList => {
        setFullList(fullList)
      })
  }, [])

  const handleSearch = (e) => {
    setFilteredList(fullList.filter(country => 
      country.name.common.toLowerCase().startsWith(
        e.target.value.toLowerCase()
      )))
    setSearchTerm(e.target.value)
  }

  const showHandler = (country) => {
    setFilteredList([country])
  }

  return (
    <>
      <Filter value={searchTerm} onChange={handleSearch} />
      <CountryDisplay searchTerm={searchTerm} list={filteredList} showHandler={showHandler} />
    </>
  )
}

export default App
