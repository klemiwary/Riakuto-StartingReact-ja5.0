import { UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { getPlayers, getTeamColor } from "@/lib/data-reader.ts";

interface PlayerListProps {
  teamId?: string;
  isLoading?: boolean;
}

export default function PlayerList({
  teamId,
  isLoading = false,
}: PlayerListProps) {
  const color = getTeamColor(teamId) ?? "gray";

  const content = isLoading ? (
    <ul className="my-6 space-y-5">
      {Array.from({ length: 5 }).map((_, n) => (
        <li className="flex items-center space-x-4" key={n}>
          <Skeleton className="size-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[250px]" />
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <ul className="my-6 space-y-5">
      {getPlayers(teamId).map((player) => (
        <li key={player.id} className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback className={`bg-${color}-50`}>
              <UserRound className={`text-${color}-500`} />
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 text-left">
            <p>{player.name}</p>
            <p className="flex text-gray-400">
              <span>{player.grade}年生</span>
              <span className="mx-2" />
              <span>{player.height ?? "???"}cm</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );

  return content;
}
