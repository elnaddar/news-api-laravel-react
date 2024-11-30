import NavBar from "./components/shared/NavBar";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import routes, { mapRoutes } from "./shared/routes";
import NewsShow from "./components/news/show/NewsShow";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {mapRoutes(([path, { Component }]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path={"/news/:news"} element={<NewsShow />} />
      </Routes>
    </>
  );
}

export default App;
