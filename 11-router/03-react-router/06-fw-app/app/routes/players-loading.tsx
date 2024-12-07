import { data, Link, useSearchParams } from 'react-router';
import PlayerList from '~/components/player-list.loading.tsx';
import TeamHeader from '~/components/team-header.tsx';
import { Label } from '~/components/ui/label.tsx';
import { Switch } from '~/components/ui/switch.tsx';
import { getPlayers, getTeam } from '~/lib/data-reader.ts';
import type { Route } from './+types/players-loading';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = !!searchParams.get('loading');
  const handleLoading = (checked: boolean) =>
    checked ? setSearchParams('loading=true') : setSearchParams('loading=');

  return (
    <>
      <TeamHeader team={team} />
      <PlayerList
        players={players}
        teamColor={team.color}
        isLoading={isLoading}
      />
      <div className="mr-4 mt-10 flex flex-row-reverse">
        <div className="flex items-center space-x-2">
          <Switch
            id="loading"
            checked={isLoading}
            onCheckedChange={handleLoading}
          />
          <Label htmlFor="loading">ローディング状態</Label>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
