import Greet from './components/Greet.tsx';
import Summary from './components/Summary.tsx';
import './App.css';

function App() {
  return (
    <>
      <Greet name="Patty" times={4} />
      <Summary title="Maple Town">
        <p>
          Patty Hope-rabbit, along with her family, arrives in Maple Town, a
          smalltown inhabited by friendly animals.
        </p>
        <p>
          Soon, the Rabbit Family settles in Maple Town as mail carriers and the
          bitter, yet sweet friendship of Patty and Bobby begins to blossom.
        </p>
      </Summary>
    </>
  );
}

export default App;
