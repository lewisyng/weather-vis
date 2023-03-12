import { StateCreator } from "zustand";

export interface SavedLocations {
  savedLocations: string[];
  addSavedLocation: (location: string) => void;
  removeSavedLocation: (location: string) => void;
  selectedSidePanelLocation: string | null;
  setSelectedSidePanelLocation: (location: string) => void;
  resetSelectedSidePanelLocation: () => void;
}

export const createSavedLocationsSlice: StateCreator<
  SavedLocations,
  [],
  [],
  SavedLocations
> = (set, get) => ({
  savedLocations: JSON.parse(localStorage.getItem("locations") || "[]"),
  addSavedLocation: (location) => {
    if (get().savedLocations.includes(location)) return;

    set({ savedLocations: [...get().savedLocations, location] });
  },
  removeSavedLocation: (location) => {
    const filteredLocations = get().savedLocations.filter(
      (savedLocation) => savedLocation !== location
    );

    set({ savedLocations: filteredLocations });
  },
  selectedSidePanelLocation: null,
  setSelectedSidePanelLocation: (location) =>
    set(() => ({ selectedSidePanelLocation: location })),
  resetSelectedSidePanelLocation: () =>
    set(() => ({ selectedSidePanelLocation: null })),
});
