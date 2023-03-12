import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchedLocation } from "../../components/SearchedLocation/SearchedLocation";
import { Dashboard } from "../../components/Dashboard/Dashboard";

export const Home = () => {
  return (
    <>
      <SearchBar />
      <SearchedLocation />
      <Dashboard />
    </>
  );
};
