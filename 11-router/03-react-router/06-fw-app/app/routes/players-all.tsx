import PlayerList from "~/components/player-list.tsx";
import { getPlayers } from "~/entities/data-reader.ts";
import type { Route } from "./+types/players-all.ts";

const title = "全チームの選手";

export function loader() {
  const players = getPlayers();

  return { players };
}

export function meta() {
  return [{ title }];
}

export default function Players({ loaderData }: Route.ComponentProps) {
  const { players } = loaderData;

  return (
    <>
      <h2 className="mb-12 text-center">{title}</h2>
      <PlayerList players={players} />
    </>
  );
}
