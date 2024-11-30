import Index from "../components/index/Index";
import NewsCreate from "../components/news/forms/NewsCreate";
import NewsIndex from "../components/news/index/NewsIndex";

function route(name, Component) {
  return {
    name,
    Component,
  };
}

const routes = {
  "/": route("Home", Index),
  "/news": route("News", NewsIndex),
  "/news/create": route("Add News", NewsCreate),
};

export function mapRoutes(callbackfn) {
  return Object.entries(routes).map(callbackfn);
}

export default routes;
