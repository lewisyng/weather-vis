import { SidePanel } from "../SidePanel/SidePanel";
import WeatherData from "../WeatherData/WeatherData";
import styles from "./Dashboard.module.scss";
import clsx from "clsx";

export const Dashboard = () => {
  return (
    <div className={clsx(styles["dashboard"], "container pt-8")}>
      <SidePanel />
      <WeatherData />
    </div>
  );
};
