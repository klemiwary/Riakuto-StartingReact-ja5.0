import { data, Link } from 'react-router';
import PlayerList from '~/components/player-list.tsx';
import TeamHeader from '~/components/team-header.tsx';
import { getPlayers, getTeam } from '~/lib/data-reader.ts';
import type { Route } from './+types/players';

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

  return (
    <>
      <TeamHeader team={team} />
      <PlayerList players={players} teamColor={team.color} />
      <hr className="my-4" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
