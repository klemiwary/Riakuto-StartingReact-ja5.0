import { Outlet } from "react-router";
import { Toaster } from "sonner";

const title = import.meta.env.VITE_APP_TITLE;

export function meta() {
  return [{ title }];
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <Outlet />
        </div>
      </main>
      <Toaster />
    </div>
  );
}
