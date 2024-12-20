import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Uni from "../components/uni";
import { page, routes } from "../utils/router";
import Loading from "../pages/Lid/loading";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
