
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  const success = pos => {

  setCoords({
    lat: pos.coords.latitude,
    lon: pos.coords.longitude,
  })
}
console.log(coords)

useEffect(() => {
  navigator.geolocation.getCurrentPosition(success)
}, [])
useEffect(() => {
  if(coords){
    const apiKey = 'f9ea51ff96a4f79e1f09293a1e954e66'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
    axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))
  }
}, [coords])

console.log(weather);
  return (
    <div className="App">
    <WeatherCard 
      weather={weather}
    />
    </div>
  )
}

export default App
