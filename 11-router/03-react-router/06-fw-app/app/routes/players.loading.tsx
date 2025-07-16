import { data, useSearchParams } from "react-router";
import LoadingSwitch from "~/components/loading-switch.tsx";
import PlayerList from "~/components/player-list.loading.tsx";
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

export default function Players({ loaderData }: Route.ComponentProps) {
  const { team, players } = loaderData;
  const [searchParams] = useSearchParams();
  const title = `${team.name}の選手`;
  const isLoading = !!searchParams.get("loading");

  return (
    <>
      <title>{title}</title>
      <h2 className="mb-12 text-center">{title}</h2>
      <PlayerList
        players={players}
        teamColor={team.color}
        isLoading={isLoading}
      />
      <LoadingSwitch />
    </>
  );
}
