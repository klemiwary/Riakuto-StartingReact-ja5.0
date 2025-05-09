import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("routes/_home.tsx", [
    index("routes/home.tsx"),
    route("players", "routes/_players.tsx", [
      index("routes/players-all.tsx"),
      route(":teamId", "routes/players.tsx"),
      // route(":teamId", "routes/players.loading.tsx"),
    ]),
  ]),
  route("*", "routes/redirect.ts"),
] satisfies RouteConfig;
