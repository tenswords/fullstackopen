import axios from 'axios'
const api_key = import.meta.env.VITE_SOME_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const getWeather = latlng => {
  const request = axios.get(
    `${baseUrl}lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}&units=metric`
  )
  return request.then(response => response.data)
}

const getIconUrl = id => 
  `https://openweathermap.org/img/wn/${id}@2x.png`


export default {getWeather, getIconUrl}
