import { notFound } from "next/navigation";
import LoadingSwitch from "@/components/loading-switch.tsx";
import PlayerList from "@/components/player-list.loading.tsx";
import { getTeam } from "@/lib/data-reader.ts";

interface PlayersProps {
  params: Promise<{ teamId?: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function generateTitle(teamId?: string) {
  const team = getTeam(teamId);

  if (!team) {
    notFound();
  }

  return `${team.name}の選手`;
}

export async function generateMetadata({ params }: PlayersProps) {
  const { teamId } = await params;
  const title = generateTitle(teamId);

  return { title };
}

export default async function Players({ params, searchParams }: PlayersProps) {
  const { teamId } = await params;
  const { loading = "" } = await searchParams;
  const title = generateTitle(teamId);

  return (
    <>
      <h2 className="mb-12 text-center">{title}</h2>
      <PlayerList teamId={teamId} isLoading={!!loading} />
      <LoadingSwitch />
    </>
  );
}
