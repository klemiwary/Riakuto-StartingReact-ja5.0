import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Layout from "@/routes/_Layout.tsx";
import CatForm from "@/routes/CatForm.tsx";
import Home from "@/routes/Home.tsx";
import StateForm from "@/routes/StateForm.tsx";
import TransitionForm from "@/routes/TransitionForm.tsx";

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
        <Route path="state-form" element={<StateForm />}></Route>
        <Route path="transition-form" element={<TransitionForm />}></Route>
        <Route path="cat-form" element={<CatForm />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
