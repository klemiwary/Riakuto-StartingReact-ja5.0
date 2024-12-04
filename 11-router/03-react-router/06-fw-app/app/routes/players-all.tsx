import { Link } from 'react-router';
import PlayerList from '~/components/player-list.tsx';
import TeamHeader from '~/components/team-header.tsx';
import { getPlayers } from '~/lib/data-reader.ts';
import type { Route } from './+types/players-all';

export function loader() {
  const players = getPlayers();

  return { players };
}

export default function Players({ loaderData }: Route.ComponentProps) {
  const { players } = loaderData;

  return (
    <>
      <TeamHeader />
      <PlayerList players={players} />
      <hr className="my-4" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
