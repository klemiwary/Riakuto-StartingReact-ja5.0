import { getTeam } from "@/entities/data-reader.ts";

interface TeamHeaderProps {
  teamId?: string;
}

export default function TeamHeader({ teamId }: TeamHeaderProps) {
  const team = getTeam(teamId);
  const teamName = team?.name || "全チーム";

  if (teamId && !team) {
    throw new Error(`not found team '${teamId}'`, { cause: { status: 404 } });
  }

  return (
    <>
      <title>{`${teamName}の選手`}</title>
      <h2 className="mt-2 mb-14 text-center">{teamName}の選手</h2>
    </>
  );
}
