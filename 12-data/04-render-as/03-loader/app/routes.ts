import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("routes/_home.tsx", [
    index("routes/home.tsx"),
    route(":orgId", "routes/_members.tsx", [
      route("members", "routes/members.tsx"),
    ]),
  ]),
  route("*", "routes/redirect.ts"),
] satisfies RouteConfig;
