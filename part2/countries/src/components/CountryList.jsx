const CountryList = ({list, showHandler}) => { 
  const listStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0
  }

  return (
    <div>
      <ul style={listStyle}>
        {list.map(country =>
          <li key={country.name.common}>
            {country.name.common} 
            <button onClick={() => showHandler(country)}>
              show
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default CountryList
