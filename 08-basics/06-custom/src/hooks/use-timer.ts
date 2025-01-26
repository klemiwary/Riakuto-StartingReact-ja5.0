import { useEffect, useState } from 'react';

export function useTimer(maxCount: number) {
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
  }, [countLeft, maxCount]);

  return [countLeft, reset] as const;
}
