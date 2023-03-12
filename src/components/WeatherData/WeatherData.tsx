import styles from "./WeatherData.module.css";
import { kelvinToCelsius } from "../../utils/helpers/kelvinToCelsius";
import BasicCard from "../BasicCard/BasicCard";
import clsx from "clsx";
import { useStore } from "../../store/zustand";
import { format, fromUnixTime } from "date-fns";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { WiBarometer } from "react-icons/wi";
import { BiWater } from "react-icons/bi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";

export const WeatherData = () => {
  // const {
  //   main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
  //   wind: { speed },
  //   sys: { sunrise, sunset },
  // } = (useAppSelector(
  //   (state) => state.weatherData.weatherData
  // ) as WeatherDataType) || { main: {}, wind: {}, sys: {} };

  const {
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    timezone,
    sys: { sunrise, sunset },
  } = useStore((state) => state.currentWeatherData);

  return (
    <div className={clsx(styles.weatherData, "pl-4 grid grid-cols-4 gap-5")}>
      {temp && (
        <BasicCard
          icon={<FaTemperatureHigh className="text-gray-500" />}
          title="Temperature"
          mainData={
            <span>
              {kelvinToCelsius(temp)}
              <span className="text-sm"> &deg;C</span>
            </span>
          }
          className="col-span-2"
        />
      )}

      {feels_like && (
        <BasicCard
          icon={<FaTemperatureHigh className="text-gray-500" />}
          title="Feels like"
          mainData={
            <span>
              {kelvinToCelsius(feels_like)}
              <span className="text-sm"> &deg;C</span>
            </span>
          }
        />
      )}

      {temp_min && (
        <BasicCard
          icon={<FaTemperatureHigh className="text-gray-500" />}
          title="Minimum temperature"
          mainData={
            <span>
              {kelvinToCelsius(temp_min)}
              <span className="text-sm"> &deg;C</span>
            </span>
          }
        />
      )}

      {temp_max && (
        <BasicCard
          icon={<FaTemperatureHigh className="text-gray-500" />}
          title="Maximum temperature"
          mainData={
            <span>
              {kelvinToCelsius(temp_max)}
              <span className="text-sm"> &deg;C</span>
            </span>
          }
        />
      )}

      {speed && (
        <BasicCard
          icon={<FiWind className="text-gray-500" />}
          title="Wind speed"
          mainData={
            <span>
              {Number((speed * 3.6).toFixed(2))}
              <span className="text-sm"> km/h</span>
            </span>
          }
        />
      )}

      {pressure && (
        <BasicCard
          icon={<WiBarometer className="text-gray-500" />}
          title="Pressure"
          mainData={
            <span>
              {pressure}
              <span className="text-sm"> hPa</span>
            </span>
          }
        />
      )}

      {humidity && (
        <BasicCard
          icon={<BiWater className="text-gray-500" />}
          title="Humidity"
          mainData={
            <span>
              {humidity}
              <span className="text-sm"> %</span>
            </span>
          }
        />
      )}

      {sunrise && (
        <BasicCard
          className="col-span-2"
          icon={<BsFillSunriseFill className="text-gray-500" />}
          title="Sunrise"
          mainData={
            <span>
              {format(fromUnixTime(sunrise + timezone - 3600), "HH:mm")}
            </span>
          }
        />
      )}

      {sunset && (
        <BasicCard
          className="col-span-2"
          icon={<BsFillSunsetFill className="text-gray-500" />}
          title="Sunset"
          mainData={
            <span>
              {format(fromUnixTime(sunset + timezone - 3600), "HH:mm")}
            </span>
          }
        />
      )}
    </div>
  );
};

export default WeatherData;
