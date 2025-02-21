import { useCallback, useEffect, useRef, useState } from "react";

export function useTimer(maxCount: number) {
  const [countLeft, setCountLeft] = useState(maxCount);
  const timerId = useRef<NodeJS.Timeout>(null);

  function tick() {
    setCountLeft((c) => c - 1);
  }

  const reset = useCallback(() => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }

    timerId.current = setInterval(tick, 1000);
    setCountLeft(maxCount);
  }, [maxCount]);

  useEffect(() => {
    reset();

    return () => clearInterval(timerId.current!);
  }, [reset]);

  useEffect(() => {
    if (countLeft === 0) {
      reset();
    }
  }, [countLeft, maxCount, reset]);

  return [countLeft, reset] as const;
}
