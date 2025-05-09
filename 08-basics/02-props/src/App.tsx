import PlayerList from '@/components/PlayerList.tsx';

const title = import.meta.env.VITE_APP_TITLE;
const players = [
  {
    id: 1,
    name: '桜木花道',
    grade: 1,
    height: 189.2,
  },
  {
    id: 2,
    name: '流川 楓',
    grade: 1,
    height: 187,
  },
  {
    id: 3,
    name: '宮城リョータ',
    grade: 2,
    height: 168,
  },
  {
    id: 4,
    name: '三井 寿',
    grade: 3,
  },
  {
    id: 5,
    name: '赤木剛憲',
    grade: 3,
    height: 197,
  },
];

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1>{title}</h1>
      <PlayerList school="湘北高校" players={players} />
    </main>
  );
}

export default App;
