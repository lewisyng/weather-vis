import { fetchCurrentWeatherData } from "../../../api/weather/currentWeather";
import toast from "react-hot-toast";
import { fetchForecastedWeatherData } from "../../../api/weather/forecastWeather";
import { StateCreator } from "zustand";

export type WeatherData = {
  currentWeatherData: any;
  forecastWeatherData: any;
  searchCurrentWeather: (search: string) => void;
  searchForecastWeather: (search: string) => void;
};

export const createWeatherDataSlice: StateCreator<
  WeatherData,
  [],
  [],
  WeatherData
> = (set) => ({
  currentWeatherData: { main: {}, wind: {}, sys: {} },
  forecastWeatherData: null,
  searchCurrentWeather: async (search) => {
    const res = await fetchCurrentWeatherData(search);

    if (res.cod === 200) {
      set(() => ({ currentWeatherData: res }));
    } else {
      toast(res.message);
    }
  },
  searchForecastWeather: async (search) => {
    const res = await fetchForecastedWeatherData(search);

    if (res.cod === "200") {
      set(() => ({ forecastWeatherData: res }));
    } else {
      toast(res.message);
    }
  },
});
