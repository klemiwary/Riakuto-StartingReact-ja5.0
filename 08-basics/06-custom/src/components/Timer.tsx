import { RotateCw } from 'lucide-react';
import { useTimer } from '@/hooks/use-timer.ts';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';

interface TimerProps {
  maxCount?: number;
}

function Timer({ maxCount = 60 }: TimerProps) {
  const [countLeft, reset] = useTimer(maxCount);

  return (
    <Card className="w-80 shadow-md">
      <CardHeader className="pt-4 pb-2">
        <div className="text-xl font-medium text-center">Count</div>
      </CardHeader>
      <CardContent className="py-1 flex justify-center">
        <div className="text-4xl font-semibold">{countLeft}</div>
      </CardContent>
      <CardContent className="flex pt-4 pb-6 mx-4">
        <Button className="w-full bg-red-500 hover:bg-red-600" onClick={reset}>
          <RotateCw className="mr-2 h-4 w-4" /> Reset
        </Button>
      </CardContent>
    </Card>
  );
}

export default Timer;
