const CountryLine = ({country}) => {
  return (
    <li>{country.name.common}</li>
  )
}

const CountryList = ({list}) => { 
  const listStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0
  }

  return (
    <div>
      <ul style={listStyle}>
        {list.map(country =>
          <CountryLine key={country.name.common} country={country} />
        )}
      </ul>
    </div>
  )
}

export default CountryList