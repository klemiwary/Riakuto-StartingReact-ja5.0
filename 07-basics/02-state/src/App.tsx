import { Title } from '@mantine/core';
import Counter from './components/Counter.tsx';
import './App.css';

function App() {
  return (
    <>
      <Title order={1} size={28} mb={32}>
        State Counter
      </Title>
      <Counter />
    </>
  );
}

export default App;
