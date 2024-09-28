import { Component } from 'react';
import { Button, Card, Text } from '@mantine/core';
import { IconRotate } from '@tabler/icons-react';

interface Props {
  maxCount?: number;
}
interface State {
  countLeft: number;
}
const MAX_COUNT = 60;

class Timer extends Component<Props, State> {
  timerId: ReturnType<typeof setInterval> | null = null;
  initialCount: number;

  constructor(props: Props) {
    super(props);
    this.initialCount = this.props.maxCount ?? MAX_COUNT;
    this.state = { countLeft: this.initialCount };
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.setState((state) => ({ ...state, countLeft: state.countLeft - 1 }));
  }

  reset() {
    this.setState({ countLeft: this.initialCount });
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    if (this.state.countLeft === 0) {
      this.reset();
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <Card px={40} py={20} radius="md" shadow="md" withBorder>
        <Card.Section pt={10} pb={5}>
          <Text fz={18}>Count</Text>
          <Text fz={42} fw={600}>
            {this.state.countLeft}
          </Text>
        </Card.Section>
        <Button
          w={250}
          color="red.8"
          leftSection={<IconRotate />}
          onClick={this.reset}
        >
          Reset
        </Button>
      </Card>
    );
  }
}

export default Timer;
