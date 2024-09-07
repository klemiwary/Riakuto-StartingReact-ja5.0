interface Props {
  name: string;
  times?: number;
}

function Greet(props: Props) {
  const { name, times = 1 } = props;

  return (
    <>
      {[...Array(times)].map(() => (
        <p>Hello, {name}!</p>
      ))}
    </>
  );
}

export default Greet;
