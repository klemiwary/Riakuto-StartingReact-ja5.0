import { Link } from "react-router";
import { CircleCheck } from "lucide-react";
import type { Team } from "~/slamdunk.d.ts";

interface Props {
  teams: Team[];
}

export default function TeamList({ teams }: Props) {
  const bullet = <CircleCheck className="mr-[0.4em] size-4 text-cyan-700" />;

  return (
    <ul className="my-6 space-y-2">
      {teams.map((team) => (
        <li key={team.id} className="flex items-center">
          {bullet}
          <Link to={`players/${team.id}`}>{team.name}</Link>
        </li>
      ))}
      <li className="flex items-center">
        {bullet}
        <Link to="players">全チーム</Link>
      </li>
    </ul>
  );
}
