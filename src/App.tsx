import PageWrapper from "./components/PageWrapper/PageWrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Forecast } from "./views/Forecast/Forecast";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<PageWrapper />}>
            <Route index element={<Home />} />
            <Route path="forecast" element={<Forecast />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
