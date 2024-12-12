import { weatherCodes } from "../constants";
 

const CurrentWeather = ({currentWeather}) => {

    let temp = "--"
    let desc = ""
    let main = ""
    let img = "no-result.svg"
    if (currentWeather.main && currentWeather.weather) {
        // Get the temperature and description
        temp = Math.floor(currentWeather.main.temp)
        desc = currentWeather.weather[0].description
        // Get the weather icon
        main = currentWeather.weather[0].main
        const weatherIcon = Object.keys(weatherCodes).find(key => key === main);
        img = weatherCodes[weatherIcon].day;
    }



    return (
        <div className="current-weather">
            <img src={`src/assets/icons/${img}`} alt="snow" className="weather-icon" />
            <h2 className="temperature">
                {temp} <span> °C </span>
            </h2>
            <p className="description"> {desc} </p>
        </div>
    )
}

export default CurrentWeather
