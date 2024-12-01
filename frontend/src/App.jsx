import NavBar from "./components/shared/NavBar";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import routes, { mapRoutes } from "./shared/routes";
import NewsShow from "./components/news/show/NewsShow";
import NewsEdit from "./components/news/forms/NewsEdit";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {mapRoutes(([path, { Component }]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path={"/news/:news"} element={<NewsShow />} />
        <Route path={"/news/:news/edit"} element={<NewsEdit />} />
      </Routes>
    </>
  );
}

export default App;
