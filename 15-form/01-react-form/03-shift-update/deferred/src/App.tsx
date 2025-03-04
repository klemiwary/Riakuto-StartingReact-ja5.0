import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Layout from "@/routes/_Layout.tsx";
import DeferredUpdate from "@/routes/DeferredUpdate.tsx";
import Home from "@/routes/Home.tsx";
import UrgentUpdate from "@/routes/UrgentUpdate.tsx";

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
        <Route path="/" element={<Home />} />
        <Route
          path="urgent-update"
          element={<UrgentUpdate count={200} />}
        ></Route>
        <Route
          path="deferred-update"
          element={<DeferredUpdate count={200} />}
        ></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
