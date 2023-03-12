import { FormEvent, useRef } from "react";
import { setWeatherData } from "../../store/slices/weatherData";
import { useAppDispatch } from "../../store/store";
import { useStore } from "../../store/zustand";
import { Input } from "../ui/Input/Input";
import { fetchForecastedWeatherData } from "../../api/weather/forecastWeather";
import clsx from "clsx";
import { Button } from "../ui/Button/Button";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export const SearchBar = () => {
  const router = useLocation();
  const searchbarRef = useRef(null);

  const dispatch = useAppDispatch();

  const {
    search,
    setSearch,
    searchCurrentWeather,
    searchForecastWeather,
    resetSelectedSidePanelLocation,
    addSavedLocation,
  } = useStore((state) => state);

  const fetchWeather = async (e: FormEvent) => {
    e.preventDefault();

    if (search === "") return;

    if (router.pathname === "/") {
      searchCurrentWeather(search);
      setSearch(search.toUpperCase());
      searchbarRef.current?.blur();
      resetSelectedSidePanelLocation();
    } else if (router.pathname === "/forecast") {
      searchForecastWeather(search);
      setSearch(search.toUpperCase());
      searchbarRef.current?.blur();
    }
  };

  const saveLocation = () => {
    const locations = JSON.parse(localStorage.getItem("locations") || "[]");
    if (locations.map((l) => l.toUpperCase()).includes(search.toUpperCase())) {
      toast("Location already saved");
      return;
    }

    localStorage.setItem("locations", JSON.stringify([...locations, search]));
    addSavedLocation(search);
  };

  return (
    <div className="container">
      <form onSubmit={fetchWeather}>
        <div className="flex items-center gap-4">
          <Input
            ref={searchbarRef}
            placeholder="Search for a location..."
            value={search}
            onChange={(e) => setSearch(e.target?.value)}
            className="uppercase"
            centerText
          />

          <Button
            disabled={!search}
            type="submit"
            className="font-bold px-4 py-2 bg-gray-700 transition-all hover:bg-gray-900 text-gray-100 whitespace-nowrap rounded"
          >
            Search
          </Button>

          <button
            type="button"
            className={clsx(
              "font-bold px-4 py-2 bg-gray-700 transition-all hover:bg-gray-900 text-gray-100 whitespace-nowrap rounded"
            )}
            onClick={saveLocation}
          >
            Save Location
          </button>
        </div>
      </form>
    </div>
  );
};
