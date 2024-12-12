import { useState } from "react";
import SearchSection from "./components/SearchSection"
import CurrentWeather from "./components/CurrentWeather"
import HourlyWeatherItem from "./components/HourlyWeatherItem"

const App = () => {
    const [currentWeather, setCurrentWeather] = useState({});
    const [weeklyWeather, setWeeklyWeather] = useState([]);

    const getWeather = (API_URL) => {
        // Create a new XMLHttpRequest
        const xhr = new XMLHttpRequest();

        // Open the request to the API URL
        xhr.open("GET", API_URL, true);

        // Define what to do when the response is received
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4)  // Request completed
            {
                if (xhr.status === 200) { // Successful response
                    let response = JSON.parse(xhr.responseText); // Parse the JSON response
                    setCurrentWeather(response);
                    getWeekWeather(response);
                } 
                else { // Failure response
                    console.error("Error fetching weather data:", xhr.status, xhr.statusText);
                }

            }
        };

        xhr.send(); // Send the request
    }


    const getWeekWeather = (currentWeather) => {
        const API_KEY = "973328026feadaa4ff54db9365885394";
        console.log(API_KEY);
        
        const API_URL_W = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_KEY}&units=metric`;
        
        const response = fetch(API_URL_W)
        .then(response => response.json())
        .then(data => {
            console.log("--", data.list);
            adjustResponce(data.list)
            console.log(weeklyWeather);
            
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });

    }
        function adjustResponce(data) {
            let date = ""
            let days
            days = data.filter((e) => {
                let day = e.dt_txt.split(" ")[0].split("-")[2] 
                if (date != day) {
                    date = e.dt_txt.split(" ")[0].split("-")[2] 
                    return e
                }
            })
            
            
            setWeeklyWeather(days);
        }

    



  return (
    <div className="container">
        <SearchSection getWeather={getWeather} />

        {/* The Weather Section */}
        <div className="weather-section">
            <CurrentWeather currentWeather={currentWeather} />

            {/* Hourly Weather List */}
            <div className="hourly-forecast">
                <ul className="weather-list">

                    {
                        (weeklyWeather != [])
                        ? weeklyWeather.map((dayWeather) => {
                            
                            return <HourlyWeatherItem dayWeather={dayWeather} />
                        })
                        
                        : null


                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default App