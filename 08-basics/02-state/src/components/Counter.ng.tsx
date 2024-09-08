import { useState } from 'react';
import { Button, Group, Card, Text } from '@mantine/core';

const range = (n: number) => [...Array(n).keys()];

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    range(3).forEach(() => setCount(count + 1));
    // range(3).forEach(() => setCount((c) => c + 1));
  }

  function reset() {
    setCount(0);
  }

  return (
    <Card p="lg" radius="md" shadow="md" withBorder>
      <Card.Section pt="md">
        <Text fz={18}>Count</Text>
        <Text fz={36} fw={600}>
          {count}
        </Text>
      </Card.Section>
      <Group align="center" m="md" mb={6} gap={5}>
        <Button size="sm" w={140} color="teal.7" onClick={increment}>
          +3
        </Button>
        <Button size="sm" w={140} color="red.7" onClick={reset}>
          Reset
        </Button>
      </Group>
    </Card>
  );
}

export default Counter;
