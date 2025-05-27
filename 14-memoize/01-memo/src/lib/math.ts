export function getPrimeNumbers(max: number) {
  if (max < 2) return [];

  return [...Array(max + 1).keys()].slice(2).filter((n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }

    return true;
  });
}
