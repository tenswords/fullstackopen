const CountryLine = ({country, showHandler}) => {
  return (
    <li>{country.name.common} <button onClick={() => showHandler(country)}>show</button></li>
  )
}

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
          <CountryLine key={country.name.common} country={country} showHandler={showHandler} />
        )}
      </ul>
    </div>
  )
}

export default CountryList