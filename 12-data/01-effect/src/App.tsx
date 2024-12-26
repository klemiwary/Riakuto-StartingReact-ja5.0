import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Layout from "@/routes/_layout.tsx";
import Index from "@/routes/index.tsx";
import Members from "@/routes/members.tsx";

export default function App() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(location.hash.slice(1));

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path=":orgId/members" element={<Members />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
