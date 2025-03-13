import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/_home.tsx", [route("/", "routes/home.tsx")]),
  route("*", "routes/redirect.ts"),
] satisfies RouteConfig;
