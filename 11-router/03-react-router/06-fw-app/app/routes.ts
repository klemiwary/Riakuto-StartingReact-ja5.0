import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/index.tsx"),
    route("players", "routes/players-all.tsx"),
    route("players/:teamId", "routes/players.tsx"),
    // route("players/:teamId", "routes/players-loading.tsx"),
  ]),
  route("*", "routes/redirect.ts"),
] satisfies RouteConfig;
