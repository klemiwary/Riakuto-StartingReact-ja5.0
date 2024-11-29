import { UserRound } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar.tsx';

interface Player {
  id: number;
  name: string;
  grade: number;
  height?: number;
}

interface Props {
  school: string;
  players: Player[];
}

function PlayerList({ school, players }: Props) {
  return (
    <div className="w-96">
      <h2 className="mb-8 text-center">{school}</h2>
      <ul className="my-6 space-y-5">
        {players.map((player) => (
          <li key={player.id} className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback className="bg-red-50">
                <UserRound className="text-red-500" />
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 text-left">
              <p>{player.name}</p>
              <p className="flex text-gray-400">
                <span>{player.grade}年生</span>
                <span className="mx-2" />
                <span>{player.height ?? '???'}cm</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
