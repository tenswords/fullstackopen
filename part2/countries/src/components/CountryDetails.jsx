const CountryDetails = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        Capital: {country.capital.join(", ")}
        <br />
        Area: {country.area}
      </div>
      <div>
        <h4>Languages:</h4>
        <ul>
          {Object.values(country.languages).map(lang => 
            <li key={lang}>{lang}</li>
          )}
        </ul>
      </div>
      <div>
        <img src={country.flags.png} />
      </div>
    </div>
  )
}

export default CountryDetails