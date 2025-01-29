import Timer from "@/components/Timer.tsx";
// import Timer from "@/components/Timer.mono.tsx";

const title = import.meta.env.VITE_APP_TITLE;

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-10">
      <h1>{title}</h1>
      <Timer />
    </main>
  );
}

export default App;
