import { Outlet } from "react-router-dom";
import { Toast } from "../ui/Toast/Toast";
import Header from "../Header/Header";

export const PageWrapper = () => {
  return (
    <div className="bg-blue-50 min-h-screen w-screen">
      <Header />
      <Outlet />
      <Toast />
    </div>
  );
};

export default PageWrapper;
