import { Outlet } from "react-router";

const title = import.meta.env.VITE_APP_TITLE;

export function meta() {
  return [{ title }];
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <Outlet />
    </div>
  );
}
