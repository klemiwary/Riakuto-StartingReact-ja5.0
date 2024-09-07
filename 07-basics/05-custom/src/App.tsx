import { Title } from '@mantine/core';
import Timer from './components/Timer.tsx';
// import Timer from './components/Timer.class.tsx';
import './App.css';

function App() {
  return (
    <>
      <Title order={1} size={28} mb={32}>
        Countdown Timer
      </Title>
      <Timer />
    </>
  );
}

export default App;
