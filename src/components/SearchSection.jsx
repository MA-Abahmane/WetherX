
const SearchSection = ({getWeather}) => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const handleCitySearch = (x) => {
        x.preventDefault();
        const searchInput = x.target.querySelector(".search-input").value
        // console.log(searchInput);

        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}&units=metric`
            

        getWeather(API_URL);


    }
  return (
    <div className="search-section">
        {/* The Search Section */}
        <form action="#" className="search-form" onSubmit={handleCitySearch}>
            <span class="material-symbols-outlined">search</span>
            <input type="search" placeholder="Enter a city name"
            className="search-input" required />
        </form>
        <button className="location-button">
            <span class="material-symbols-outlined">location_searching</span>
        </button>
    </div>
  )
}




export default SearchSection