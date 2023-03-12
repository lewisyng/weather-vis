import { useCallback, useEffect, useState } from "react";
import { useStore } from "../../store/zustand";
import clsx from "clsx";
import { AiFillDelete } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";

export const SidePanel = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setLocations(JSON.parse(localStorage.getItem("locations") || "[]"));
  }, []);

  const {
    search,
    setSearch,
    searchCurrentWeather,
    selectedSidePanelLocation,
    setSelectedSidePanelLocation,
    resetSelectedSidePanelLocation,
    savedLocations,
    addSavedLocation,
    removeSavedLocation,
  } = useStore((state) => state);

  const addLocation = useCallback((e, input) => {
    e.preventDefault();
    const locations = JSON.parse(localStorage.getItem("locations") || "[]");

    if (locations.includes(input)) return;

    localStorage.setItem("locations", JSON.stringify([...locations, input]));
    setInput("");

    addSavedLocation(input);
  }, []);

  const deleteLocation = useCallback((locationToBeDeleted: string) => {
    const newLocations = JSON.parse(
      localStorage.getItem("locations") || "[]"
    ).filter(
      (location) => location.toUpperCase() !== locationToBeDeleted.toUpperCase()
    );

    setLocations(newLocations);
    localStorage.setItem("locations", JSON.stringify(newLocations));
    removeSavedLocation(locationToBeDeleted);
  }, []);

  return (
    <div className="border-r border-gray-300 pr-4">
      <div className="mb-2 font-bold text-black">Saved locations</div>

      <form onSubmit={(e) => addLocation(e, input)}>
        <div className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add location..."
            size="small"
          />

          <Button type="submit" className="bg-gray-800 p-2">
            <GrAdd className="text-white [&>*]:stroke-white" />
          </Button>
        </div>
      </form>

      <div className="flex flex-col items-start gap-2 mt-8">
        {savedLocations.map((location, idx) => {
          return (
            <div className="flex items-center justify-between gap-4 w-full">
              <button
                key={idx}
                className={clsx(
                  "p-4 rounded-lg bg-transparent text-black hover:bg-blue-500 hover:text-white uppercase font-bold relative transition-all duration-300",
                  selectedSidePanelLocation?.toUpperCase() ===
                    location.toUpperCase() && "text-white !bg-blue-500"
                )}
                onClick={() => {
                  setSearch(location);
                  searchCurrentWeather(location);
                  setSelectedSidePanelLocation(location);
                }}
              >
                {location}
              </button>

              <Button
                variant="icon"
                onClick={() => {
                  deleteLocation(location);
                  resetSelectedSidePanelLocation();
                }}
              >
                <AiFillDelete />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
