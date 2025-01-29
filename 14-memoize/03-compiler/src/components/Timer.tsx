import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import { useTimer } from "@/hooks/use-timer.ts";
import { getPrimeNumbers } from "@/utils/math.ts";

interface TimerProps {
  maxCount?: number;
}

export default function Timer({ maxCount = 60 }: TimerProps) {
  const [countLeft, reset] = useTimer(maxCount);
  const primeNumbers = getPrimeNumbers(maxCount);

  return (
    <Card className="w-80 shadow-md">
      <CardHeader className="pb-2 pt-4">
        <div className="text-center text-xl font-medium">Count</div>
      </CardHeader>
      <CardContent className="flex justify-center py-1">
        <div className="text-4xl font-semibold">
          {primeNumbers.includes(countLeft) ? (
            <span className="text-pink-400">{countLeft}</span>
          ) : (
            <>{countLeft}</>
          )}
        </div>
      </CardContent>
      <CardContent className="mx-4 flex pb-6 pt-4">
        <Button className="w-full bg-red-500 hover:bg-red-600" onClick={reset}>
          <RotateCw className="mr-2 size-4" /> Reset
        </Button>
      </CardContent>
    </Card>
  );
}
