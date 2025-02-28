import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner.tsx";

const appTitle = import.meta.env.VITE_APP_TITLE;

export default function Layout() {
  return (
    <>
      <title>{appTitle}</title>
      <div className="flex min-h-screen flex-col items-center bg-white">
        <h1 className="mt-16 text-2xl font-bold text-gray-900">{appTitle}</h1>
        <main className="mt-10 w-full max-w-md px-4">
          <Outlet />
        </main>
        <Toaster />
      </div>
    </>
  );
}
