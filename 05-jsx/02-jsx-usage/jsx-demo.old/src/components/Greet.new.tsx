interface Props {
  name: string;
  times?: number;
}

function Greet(props: Props) {
  const { name, times = 1 } = props;

  return (
    <>
      {[...Array(times).keys()].map((i) => (
        <p key={i}>Hello, {name}!</p>
      ))}
    </>
  );
}

export default Greet;
