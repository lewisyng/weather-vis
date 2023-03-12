/**
 * Forecast Api uses coordinates to fetch weather data for given location
 * Therefore we need to transform location to coordinates
 *
 * @param location
 * @returns {Object}
 */

const getCoordsForLocation = async (location: string) => {
  const temp: any = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
    }`
  );

  const json = await temp.json();

  const { lon, lat } = json[0];

  return { lon, lat };
};

/**
 * Fetch weather data for given location that forecasts the next 5 days
 *
 * @param location
 * @returns {Promise<any>}
 */

export const fetchForecastedWeatherData = async (location: string) => {
  const { lon, lat } = await getCoordsForLocation(location);

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
    }`
  );

  return res.json();
};
