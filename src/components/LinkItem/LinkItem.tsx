import { clearWeatherData } from "../../store/slices/weatherData";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../store/store";

export const LinkItem = ({ title, href }: { title: string; href: string }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname !== href) {
      dispatch(clearWeatherData());
    }
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className="py-2 px-4 bg-white hover:bg-gray-800 transition-all cursor-pointer text-black hover:text-white text-md"
    >
      {title}
    </Link>
  );
};

export default LinkItem;
