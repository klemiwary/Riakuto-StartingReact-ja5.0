import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <Card className="min-w-96 gap-2 pt-4 shadow-md">
      <CardHeader>
        <div className="text-center text-xl font-medium">Count</div>
      </CardHeader>
      <CardContent className="flex justify-center pb-2">
        <div className="text-4xl font-semibold">{count}</div>
      </CardContent>
      <CardContent className="mx-4 flex gap-2">
        <Button
          className="flex-1 bg-green-600 hover:bg-green-700"
          onClick={increment}
        >
          +1
        </Button>
        <Button className="flex-1 bg-red-600 hover:bg-red-700" onClick={reset}>
          Reset
        </Button>
      </CardContent>
    </Card>
  );
}

export default Counter;
