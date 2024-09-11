import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Universal from "../components/Universal";
import { routes } from "../utils/routes";
import Context from "../context";
import { HelmetProvider } from "react-helmet-async";
import Not from "../Pages/Not";
import Coding from "../Pages/Coding";
import Privacy from "../Pages/Privacy";
import Lid from "../Pages/Lid";

const Root = () => {
  return (
    <Context>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Universal />}>
              {routes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))}
            </Route>
            <Route path="*" element={<Not />} />
            <Route path="/lid-for-coding" element={<Coding />} />
            <Route path="/lid" element={<Lid />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Context>
  );
};

export default Root;
