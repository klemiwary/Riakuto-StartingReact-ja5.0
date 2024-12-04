import type { Team } from '~/slamdunk.d.ts';

interface Props {
  team?: Team | null;
}

export default function TeamHeader({ team }: Props) {
  const teamName = team?.name || '全チーム';

  return (
    <>
      <title>{`${teamName}の選手`}</title>
      <h2 className="mb-12 text-center">{teamName}の選手</h2>
    </>
  );
}
