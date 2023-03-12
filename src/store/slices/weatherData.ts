import { createSlice } from '@reduxjs/toolkit';
import { WeatherDataType } from '../../types/weatherdata';
import { ForecastWeatherDataType } from '../../types/forecastWeatherData';

interface initialState {
    weatherData: 
        | null 
        | WeatherDataType 
        | ForecastWeatherDataType;
}

const initialState: initialState = {
    weatherData: null,
};

export const weatherData = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        setWeatherData: (state, action) => {
            state.weatherData = action.payload;
        },
        clearWeatherData: (state) => {
            state.weatherData = null;
        }
    },
});

export const { setWeatherData, clearWeatherData } = weatherData.actions;

export default weatherData.reducer;
