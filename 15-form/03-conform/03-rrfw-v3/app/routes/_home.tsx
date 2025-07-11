import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <Outlet />
    </div>
  );
}
