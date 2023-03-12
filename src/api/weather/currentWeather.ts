/**
 * Fetch weather data for given location at current time
 * @param location
 * @returns {Promise<any>}
 */

export const fetchCurrentWeatherData = async (location: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
    }`
  );

  return await res.json();
};
