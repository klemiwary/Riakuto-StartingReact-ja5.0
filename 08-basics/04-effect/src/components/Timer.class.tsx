import { Component } from 'react';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';

interface Props {
  maxCount?: number;
}

interface State {
  countLeft: number;
}

class Timer extends Component<Props, State> {
  timerId: ReturnType<typeof setInterval> | null = null;
  initialCount: number;

  constructor(props: Props) {
    super(props);
    this.initialCount = this.props.maxCount ?? 60;
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
      <Card className="w-80 shadow-md">
        <CardHeader className="pt-4 pb-2">
          <div className="text-xl font-medium text-center">Count</div>
        </CardHeader>
        <CardContent className="py-1 flex justify-center">
          <div className="text-4xl font-semibold">{this.state.countLeft}</div>
        </CardContent>
        <CardContent className="flex pt-4 pb-6 mx-4">
          <Button
            className="w-full bg-red-500 hover:bg-red-600"
            onClick={this.reset}
          >
            <RotateCw className="mr-2 h-4 w-4" /> Reset
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default Timer;
