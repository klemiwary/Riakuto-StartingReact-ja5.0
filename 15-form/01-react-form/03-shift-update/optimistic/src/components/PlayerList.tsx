import { UserRound } from "lucide-react";
// import LikeButton from "@/components/LikeButton.tsx";
import LikeButton from "@/components/LikeButton.action.tsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar.tsx";
import { getPlayers, getTeamColor } from "@/lib/data-reader.ts";

interface PlayerListProps {
  teamId?: string;
}

export default function PlayerList({ teamId }: PlayerListProps) {
  const color = getTeamColor(teamId) ?? "gray";

  return (
    <ul className="mx-2 my-8 space-y-6">
      {getPlayers(teamId).map((player) => (
        <li key={player.id} className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback className={`bg-${color}-50`}>
              <UserRound className={`text-${color}-500`} />
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 w-48 text-left">
            <p>{player.name}</p>
            <p className="flex text-gray-400">
              <span>{player.grade}年生</span>
              <span className="mx-2" />
              <span>{player.height ?? "???"}cm</span>
            </p>
          </div>
          <LikeButton initialCount={player.likedCount} />
        </li>
      ))}
    </ul>
  );
}
