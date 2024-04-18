import {useState, useEffect} from 'react'
import weatherService from '../services/weather.js'

const CountryDetails = ({country}) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService
      .getWeather(country.capitalInfo.latlng)
      .then(currentWeather =>
        setWeather(currentWeather)
      )
  }, [])

  if(!weather) {
    return null
  }

  return (
    <div>
      <div>
        <h1>{country.name.common}</h1>
        Official Name: {country.name.official}
        <br />
        Capital: {country.capital.join(", ")}
        <br />
        Area: {country.area}
        <br />
        Population: {country.population}
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
        <img src={country.flags.png} alt="flag" />
      </div>
      <div>
        <h3>Weather in {country.capital[0]}</h3>
        Temperature: {weather.main.temp} ℃
        <br />
        Feels like: {weather.main.feels_like} ℃
        <br />
        Humidity: {weather.main.humidity}%
        <br />
        <img 
          src={weatherService.getIconUrl(weather.weather[0].icon)} 
          alt={weather.weather[0].description}/>
        <br />
        Wind: {weather.wind.speed} m/s
      </div>
    </div>
  )
}

export default CountryDetails