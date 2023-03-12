import { useAppSelector } from "../../store/store";
import { ForecastWeatherDataType } from "../../types/forecastWeatherData";
import { kelvinToCelsius } from "../../utils/helpers/kelvinToCelsius";
import clsx from "clsx";
import { useStore } from "../../store/zustand";

export const ForecastList = () => {
  const { forecastWeatherData } = useStore();

  return (
    <div className="container">
      <div className={clsx("grid grid-cols-4 p-2 font-bold text-gray-500")}>
        <span>Time</span>
        <span>Temp</span>
        <span>Min Temp</span>
        <span>Max Temp</span>
      </div>
      {forecastWeatherData &&
        (forecastWeatherData as ForecastWeatherDataType)?.list.map(
          (item, idx) => {
            const timestamp = new Date(item.dt * 1000);
            const convertedTime = timestamp.toLocaleTimeString("de-DE");

            return (
              <div key={idx}>
                {convertedTime === "02:00:00" && (
                  <div
                    className={clsx(
                      "text-center font-bold bg-gray-700 text-gray-50 py-2 my-2"
                    )}
                  >
                    {timestamp.toLocaleDateString("de-DE", {
                      weekday: "long",
                    })}
                  </div>
                )}
                <div
                  className={clsx(
                    "grid grid-cols-4 p-2 text-gray-700 hover:bg-gray-300 hover:font-bold"
                  )}
                >
                  <span>{timestamp.toLocaleTimeString("de-DE")}</span>
                  <span>{kelvinToCelsius(item.main.temp)}&deg;C</span>
                  <span>{kelvinToCelsius(item.main.temp_min)}&deg;C</span>
                  <span>{kelvinToCelsius(item.main.temp_max)}&deg;C</span>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default ForecastList;
