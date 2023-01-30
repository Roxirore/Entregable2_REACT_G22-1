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
            <h3 className="card__description">"{weather?.weather[0].description}"</h3>
            <ul className="card__list">
                <li className="card__item"><span className="card__span"><i className='bx bx-wind'></i> Wind speed: </span>{weather?.wind.speed} meter/sec</li>
                <li className="card__item"><span className="card__span"><i className='bx bx-cloud'></i> Clouds: </span>{weather?.clouds.all} %</li>
                <li className="card__item"><span className="card__span"><i className='bx bxs-thermometer'></i> Pressure: </span>{weather?.main.pressure} hPa</li>
            </ul>
        </section>

    </article>
  )
}

export default WeatherCard