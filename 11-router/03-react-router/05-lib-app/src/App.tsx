import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import Layout from '@/routes/_layout.tsx';
import Index from '@/routes/index.tsx';
// import Players from '@/routes/players.tsx';
import Players from '@/routes/players.loading.tsx';

export default function App() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(location.hash.slice(1));

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="players" element={<Players />}></Route>
        <Route path="players/:teamId" element={<Players />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
