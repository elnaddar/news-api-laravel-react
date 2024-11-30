import NavBar from "./components/shared/NavBar";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { mapRoutes } from "./shared/routes";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {mapRoutes(([path, { component }]) => (
          <Route path={path} element={component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
