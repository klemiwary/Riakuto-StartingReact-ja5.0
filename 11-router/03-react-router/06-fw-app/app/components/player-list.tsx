import { UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar.tsx";
import type { Player } from "~/entities/types.ts";

interface PlayerListProps {
  players: Player[];
  teamColor?: string;
}

export default function PlayerList({ players, teamColor }: PlayerListProps) {
  const color = teamColor ?? "gray";

  return (
    <ul className="my-6 space-y-5">
      {players.map((player) => (
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
}
