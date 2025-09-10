import React, { useState } from 'react';

// Main App Component
const App = () => {
  // State variables to manage city input, messages, and weather data
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- IMPORTANT ---
  // API key has been added.
  const API_KEY = "b36fc8f87e22217a6769206d26c6ba75";

  // Handles changes in the city input field
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setMessage(''); // Clear any previous messages
  };

  // Fetches weather data when the form is submitted
  const fetchWeather = (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      setMessage('Please enter a city name.');
      setWeatherData(null);
      return;
    }

    setLoading(true);
    setWeatherData(null);
    setMessage('');

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          // If city is not found or another error occurs
          throw new Error('City not found. Please check the spelling.');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        setCity(''); // Clear the input field on success
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setMessage(error.message);
        setWeatherData(null);
      })
      .finally(() => {
        setLoading(false); // Stop loading indicator
      });
  };

  // Component to display the weather information
  const WeatherCard = ({ data }) => {
    if (!data) return null;

    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
      <div className="mt-8 text-center bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800">{data.name}, {data.sys.country}</h2>
        <div className="flex items-center justify-center my-4">
          <img src={iconUrl} alt={data.weather[0].description} className="w-24 h-24" />
          <div className="ml-4">
            <p className="text-5xl font-semibold text-gray-900">{Math.round(data.main.temp)}°C</p>
            <p className="text-lg text-gray-600 capitalize">{data.weather[0].description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6 text-left">
          <div className="p-3 bg-white/50 rounded-lg">
            <p className="text-sm text-gray-500">Feels Like</p>
            <p className="font-semibold text-gray-800">{Math.round(data.main.feels_like)}°C</p>
          </div>
          <div className="p-3 bg-white/50 rounded-lg">
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="font-semibold text-gray-800">{data.main.humidity}%</p>
          </div>
          <div className="p-3 bg-white/50 rounded-lg">
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p className="font-semibold text-gray-800">{data.wind.speed} m/s</p>
          </div>
          <div className="p-3 bg-white/50 rounded-lg">
            <p className="text-sm text-gray-500">Pressure</p>
            <p className="font-semibold text-gray-800">{data.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-cyan-400 to-light-blue-500 p-4 font-sans">
      <div className="w-full max-w-md">
        <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Weather App</h1>
          <div className="mb-6 text-gray-700">
            <p>Name: BIDYACHANDRA MAIBRAM</p>
            <p>Register No.: 23BTCE203</p>
          </div>
          <form onSubmit={fetchWeather} className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter city name..."
              className="w-full px-4 py-3 border-2 border-transparent rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={city}
              onChange={handleCityChange}
            />
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Get Weather'}
            </button>
          </form>
        </div>

        {/* Display messages or weather data */}
        {message && <p className="mt-4 text-center text-red-100 bg-red-500/80 p-3 rounded-lg shadow-md">{message}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
       <footer className="mt-8 text-white/80 text-sm text-center">
         <p>Powered by OpenWeatherMap</p>
      </footer>
    </div>
  );
};

export default App;

 
