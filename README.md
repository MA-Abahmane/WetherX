# WeatherX

Welcome to my **Weather App**! This app provides current weather updates and weekly forecasts using the OpenWeatherMap API. With a sleek interface and accurate data, it’s your go-to tool for planning your days.

---

## Features

- **Search Functionality**: Look up the current weather for any location.
- **Current Weather Display**: View detailed information about the current weather.
- **Weekly Weather Forecast**: See the weather forecast for the upcoming days.
- **Responsive Design**: Optimized for various screen sizes.

---

## Tech Stack

- **Frontend**: React.js
- **API**: OpenWeatherMap API
- **State Management**: React Hooks (`useState`)
- **Data Fetching**: XMLHttpRequest and Fetch API

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Search for a location**: Enter the name of the city in the search bar and hit enter.
2. **View current weather**: The app will display the current temperature, weather conditions, and more.
3. **Check the weekly forecast**: Scroll down to see daily weather summaries for the week.

---

## API Integration

The app integrates with the OpenWeatherMap API to fetch weather data:

1. **Current Weather API**: Retrieves real-time weather data.
2. **Forecast API**: Provides 5-day weather forecasts.

Make sure to replace the API key in the code with your own from [OpenWeatherMap](https://openweathermap.org/api):

```javascript
const API_KEY = "YOUR_API_KEY";
```

---

## Screenshots

Add screenshots of your app here:

- **Home Page**:<br/>
<img width="250px" src="public/pr1.png" />

- **Weekly Forecast**:<br/>
<img width="250px" src="public/pr2.png" />

---

## Known Issues

- Ensure the API key is valid and active.
- The app currently uses static latitude and longitude values for weekly weather forecasts. Dynamic location functionality will be added in future updates.

---

## Future Improvements

- Add support for location-based searches (dynamic latitude/longitude).
- Improve UI/UX design with animations and enhanced responsiveness.
- Display more detailed hourly forecasts.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add feature name'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- React.js documentation for guidance on building components.

---

Thank you for using the Weather App! Feel free to contribute or provide feedback.

