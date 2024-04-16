import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountriesList from './components/CountryDisplay'
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

  return (
    <>
      <Filter value={searchTerm} onChange={handleSearch} />
      <CountriesList searchTerm={searchTerm} list={filteredList} />
    </>
  )
}

export default App
