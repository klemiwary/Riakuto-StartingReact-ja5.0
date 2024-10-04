import Timer from '@/components/Timer.tsx';
// import Timer from '@/components/Timer.class.tsx';

const title = import.meta.env.VITE_APP_TITLE;

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-10">
      <h1>{title}</h1>
      <Timer />
    </main>
  );
}

export default App;
