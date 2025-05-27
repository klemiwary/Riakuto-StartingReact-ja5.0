import { data } from "react-router";
import PlayerList from "~/components/player-list.tsx";
import { getPlayers, getTeam } from "~/entities/data-reader.ts";
import type { Route } from "./+types/players.ts";

export function loader({ params }: Route.LoaderArgs) {
  const team = getTeam(params.teamId);
  const players = getPlayers(params.teamId);

  if (!team) {
    throw data(`not found team '${params.teamId}'`, { status: 404 });
  }

  return { team, players };
}

export function meta({ data }: Route.MetaArgs) {
  return [{ title: `${data.team.name}の選手` }];
}

export default function Players({ loaderData }: Route.ComponentProps) {
  const { team, players } = loaderData;

  return (
    <>
      <h2 className="mb-12 text-center">{team.name}の選手</h2>
      <PlayerList players={players} teamColor={team.color} />
    </>
  );
}
