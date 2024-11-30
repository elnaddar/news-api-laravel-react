import Index from "../components/index/Index";
import NewsIndex from "../components/news/NewsIndex";

function route(name, Component) {
  return {
    name,
    Component,
  };
}

const routes = {
  "/": route("Home", Index),
  "/news": route("News", NewsIndex),
};

export function mapRoutes(callbackfn) {
  return Object.entries(routes).map(callbackfn);
}

export default routes;
