import Index from "../components/index/Index";

const routes = {
  "/": {
    name: "Home",
    component: <Index />,
  },
};

export function mapRoutes(callbackfn) {
  return Object.entries(routes).map(callbackfn);
}

export default routes;
