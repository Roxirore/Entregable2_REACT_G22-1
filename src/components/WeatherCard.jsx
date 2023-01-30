import React from 'react'

const WeatherCard = ({weather}) => {
    console.log(weather)
  return (
    <article className="card">
        <header className="card__header">
            <h1 className="card__title">Weather App</h1>
            <h2 className="card__subtitle">City: {weather?.name}</h2>
            <h2 className="card__subtitle">Country: {weather?.sys.country}</h2>
        </header>
        <section>
            <img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
            <h3>{weather?.main.temp}</h3>
        </section>

    </article>
  )
}

export default WeatherCard