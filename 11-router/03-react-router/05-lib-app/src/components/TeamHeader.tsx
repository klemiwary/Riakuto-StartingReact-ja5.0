import { getTeam } from "@/lib/data-reader.ts";

interface Props {
  teamId?: string;
}

export default function TeamHeader({ teamId }: Props) {
  const team = getTeam(teamId);
  const teamName = team?.name || "全チーム";

  if (teamId && !team) {
    throw new Error(`not found team '${teamId}'`, { cause: { status: 404 } });
  }

  return (
    <>
      <title>{`${teamName}の選手`}</title>
      <h2 className="mb-12 text-center">{teamName}の選手</h2>
    </>
  );
}
