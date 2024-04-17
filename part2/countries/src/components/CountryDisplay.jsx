import CountryList from './CountryList'
import CountryDetails from './CountryDetails'

const CountryDisplay = ({searchTerm, list, showHandler}) => {
  if (!list || searchTerm == '') {
    return (' ')
  }
  
  if (list.length === 1) {
    return (
      <CountryDetails country={list[0]} />
    )
  } 
  
  if (list.length > 5) {
    return (
      'Too many matches; specify another filter'
    )
  }
  
  return (
    <CountryList list={list} showHandler={showHandler} />
  )  
}

export default CountryDisplay