import { useEffect, useState } from 'react';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';

interface TimerProps {
  maxCount?: number;
}

function Timer({ maxCount = 60 }: TimerProps) {
  const [countLeft, setCountLeft] = useState(maxCount);

  function tick() {
    setCountLeft((c) => c - 1);
  }

  function reset() {
    setCountLeft(maxCount);
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (countLeft === 0) {
      setCountLeft(maxCount);
    }
  });
  // }, [countLeft, maxCount]);

  return (
    <Card className="w-80 shadow-md gap-2">
      <CardHeader>
        <div className="text-xl font-medium text-center">Count</div>
      </CardHeader>
      <CardContent className="flex justify-center pb-2">
        <div className="text-4xl font-semibold">{countLeft}</div>
      </CardContent>
      <CardContent className="flex mx-4">
        <Button className="w-full bg-red-500 hover:bg-red-600" onClick={reset}>
          <RotateCw className="mr-2 h-4 w-4" /> Reset
        </Button>
      </CardContent>
    </Card>
  );
}

export default Timer;
