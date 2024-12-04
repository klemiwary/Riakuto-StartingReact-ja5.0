import TeamList from '~/components/team-list.tsx';
import { getAllTeams } from '~/lib/data-reader.ts';
import type { Route } from './+types/index';

const appTitle = import.meta.env.VITE_APP_TITLE;

export function loader() {
  const teams = getAllTeams();

  return { teams };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { teams } = loaderData;

  return (
    <>
      <title>{appTitle}</title>
      <h2 className="mb-12 text-center">🏀 高校チーム別一覧</h2>
      <TeamList teams={teams} />
    </>
  );
}
