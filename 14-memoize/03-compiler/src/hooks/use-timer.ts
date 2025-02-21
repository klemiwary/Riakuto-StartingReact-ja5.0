import { useEffect, useRef, useState } from "react";

export function useTimer(maxCount: number) {
  const [countLeft, setCountLeft] = useState(maxCount);
  const timerId = useRef<NodeJS.Timeout>(null);

  function tick() {
    setCountLeft((c) => c - 1);
  }

  function reset() {
    if (timerId.current) {
      clearInterval(timerId.current);
    }

    timerId.current = setInterval(tick, 1000);
    setCountLeft(maxCount);
  }

  useEffect(() => {
    reset();

    return () => clearInterval(timerId.current!);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (countLeft === 0) {
      reset();
    }
  }, [countLeft, maxCount]); // eslint-disable-line react-hooks/exhaustive-deps

  return [countLeft, reset] as const;
}
