import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./assets/constants/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
}

export default App;
