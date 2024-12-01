import { Link, useParams, useSearchParams } from 'react-router';
import PlayerList from '@/components/PlayerList.loading.tsx';
import TeamHeader from '@/components/TeamHeader.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Switch } from '@/components/ui/switch.tsx';

export default function Players() {
  const { teamId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('loading'));
  const isLoading = !!searchParams.get('loading');
  const handleLoading = (checked: boolean) =>
    checked ? setSearchParams('loading=true') : setSearchParams('loading=');

  return (
    <>
      <TeamHeader teamId={teamId} />
      <PlayerList teamId={teamId} isLoading={isLoading} />
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
