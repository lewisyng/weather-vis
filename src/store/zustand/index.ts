import { create } from "zustand";
import {
  createSavedLocationsSlice,
  SavedLocations,
} from "./slices/savedLocations";
import { createSearchSlice, Search } from "./slices/search";
import { createWeatherDataSlice } from "./slices/weatherData";
import { WeatherData } from "./slices/weatherData";

type Store = SavedLocations & Search & WeatherData;

export const useStore = create<Store>((...a) => ({
  ...createSearchSlice(...a),
  ...createSavedLocationsSlice(...a),
  ...createWeatherDataSlice(...a),
}));
