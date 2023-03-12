import { WeatherDataType } from "../../types/weatherdata";
import { useStore } from "../../store/zustand";

export const SearchedLocation = () => {
  const { currentWeatherData } = useStore();

  return (
    <div className="container">
      <div className="flex gap-4 pt-4">
        {(currentWeatherData as WeatherDataType)?.coord?.lat && (
          <p className="font-bold text-black">
            Lat: {(currentWeatherData as WeatherDataType).coord.lat}
          </p>
        )}

        {(currentWeatherData as WeatherDataType)?.coord?.lon && (
          <p className="font-bold text-black">
            Lon: {(currentWeatherData as WeatherDataType).coord.lon}
          </p>
        )}
      </div>
    </div>
  );
};
