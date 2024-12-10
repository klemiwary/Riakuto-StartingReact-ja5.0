import { Link } from "react-router";
import PlayerList from "~/components/player-list.tsx";
import { getPlayers } from "~/lib/data-reader.ts";
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
      <hr className="my-4" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
