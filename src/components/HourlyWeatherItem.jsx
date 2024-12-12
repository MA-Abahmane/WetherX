
const HourlyWeatherItem = ({dayWeather}) => {
  
 console.log(dayWeather);
 
  let date = dayWeather.dt_txt.split(" ")[0]
  let setDate = new Date(date).toDateString().split(" ")[0]
  
  return (
    <li className="weather-item">
        <p className="time"> {setDate }   </p>
        <img src="src/assets/icons/rain.svg" alt="" className="weather-icon" />
        <p className="temperature">{Math.floor(dayWeather.main.temp)} <span className="metric">°C</span></p>
    </li>
  )
}

export default HourlyWeatherItem