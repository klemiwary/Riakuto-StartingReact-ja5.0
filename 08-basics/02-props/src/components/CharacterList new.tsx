import { UserRound } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar.tsx';

interface Character {
  id: number;
  name: string;
  grade: number;
  height?: number;
}

interface Props {
  school: string;
  characters: Character[];
}

function CharacterList({ school, characters }: Props) {
  return (
    <div className="w-96">
      <h2 className="mb-8 text-center">{school}</h2>
      <ul className="my-6 space-y-5">
        {characters.map((character) => (
          <li key={character.id} className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback className="bg-red-50">
                <UserRound className="text-red-500" />
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 text-left">
              <p>{character.name}</p>
              <p className="flex text-gray-400">
                <span>{character.grade}年生</span>
                <span className="mx-2" />
                <span>{character.height ?? '???'}cm</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
