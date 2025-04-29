import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Uni from "../components/uni";
import { page, routes } from "../utils/router";
import Loading from "../pages/Lid/loading";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactPixel from "react-facebook-pixel";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    ReactPixel.init("434174359005882", null, {
      autoConfig: true,
    });

    ReactPixel.pageView();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Uni />}>
          {routes.map((e) => (
            <Route key={e.id} path={e.path} element={e.element} />
          ))}
        </Route>
        {page.map((e) => (
          <Route key={e.id} path={e.path} element={e.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
