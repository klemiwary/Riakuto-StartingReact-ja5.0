import { notFound } from "next/navigation";
import PlayerList from "@/components/player-list.tsx";
import { getTeam } from "@/entities/data-reader.ts";

interface PlayersProps {
  params: Promise<{ teamId: string }>;
}

function generateTitle(teamId: string) {
  const team = getTeam(teamId);

  if (!team) notFound();

  return `${team.name}の選手`;
}

export async function generateMetadata({ params }: PlayersProps) {
  const { teamId } = await params;
  const title = generateTitle(teamId);

  return { title };
}

export default async function Players({ params }: PlayersProps) {
  const { teamId } = await params;
  const title = generateTitle(teamId);

  return (
    <>
      <h2 className="mb-12 text-center">{title}</h2>
      <PlayerList teamId={teamId} />
    </>
  );
}
