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
        <section className="card__icon-container">
            <img className="card__icon" src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
            <h3 className="card__temp">{weather?.main.temp}</h3>
        </section>
        <section className="card__info">
            <h3>{weather?.weather[0].description}</h3>
            <ul>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
            </ul>
        </section>

    </article>
  )
}

export default WeatherCard