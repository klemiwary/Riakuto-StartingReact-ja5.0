import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("routes/_home.tsx", [
    index("routes/home.tsx"),
    route("register", "routes/register.tsx"),
    route("register-email", "routes/register-email.tsx"),
    layout("routes/_registered.tsx", [
      route("registered", "routes/registered.tsx"),
    ]),
  ]),
  route("dummy", "routes/dummy.tsx"),
  route("*", "routes/redirect.ts"),
] satisfies RouteConfig;
