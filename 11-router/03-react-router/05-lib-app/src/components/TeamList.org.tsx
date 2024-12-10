import { Link } from "react-router";
import { getAllTeams } from "@/lib/data-reader.ts";

export default function TeamList() {
  return (
    <ul className="my-6 space-y-2">
      {getAllTeams().map((team) => (
        <li key={team.id}>
          <Link to={`players/${team.id}`}>{team.name}</Link>
        </li>
      ))}
      <li>
        <Link to="players">全チーム</Link>
      </li>
    </ul>
  );
}
