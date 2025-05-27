import SHA256 from "crypto-js/sha256";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
  "gray",
];

interface User {
  id: number;
  username: string;
  color: (typeof colors)[number];
  hash: string;
}

function overload(amount: number) {
  let _result = 0;

  for (let i = 0; i < amount; i++) {
    _result += Math.sqrt(i);
  }
}

export function createUser(id: number, username: string): User {
  overload(1e5);
  const hash = SHA256(`${id}${username}`).toString().substring(0, 18);
  const colorNum = hash.split("").find((c) => c.match(/[0-9]/)) ?? "0";
  const color = colors[Number(colorNum)];

  return { id, username, color, hash };
}
