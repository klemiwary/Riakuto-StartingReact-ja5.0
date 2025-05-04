import { Link } from "react-router";
import { CircleCheck } from "lucide-react";
import { getAllTeams } from "@/entities/data-reader.ts";

export default function TeamList() {
  const bullet = <CircleCheck className="mr-[0.4em] size-4 text-cyan-700" />;

  return (
    <ul className="my-6 space-y-2">
      {getAllTeams().map((team) => (
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
