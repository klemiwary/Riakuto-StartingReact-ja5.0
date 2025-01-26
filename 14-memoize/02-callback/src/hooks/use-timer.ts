import { useCallback, useEffect, useRef, useState } from "react";

export function useTimer(maxCount: number) {
  const [countLeft, setCountLeft] = useState(maxCount);
  const intervalId = useRef(0);

  function tick() {
    setCountLeft((c) => c - 1);
  }

  const reset = useCallback(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    intervalId.current = setInterval(tick, 1000);
    setCountLeft(maxCount);
  }, [maxCount]);

  useEffect(() => {
    reset();

    return () => clearInterval(intervalId.current);
  }, [reset]);

  useEffect(() => {
    if (countLeft === 0) {
      reset();
    }
  }, [countLeft, maxCount, reset]);

  return [countLeft, reset] as const;
}
