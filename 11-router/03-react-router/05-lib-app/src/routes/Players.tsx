import { Link, useParams } from "react-router";
import PlayerList from "@/components/PlayerList.tsx";
import TeamHeader from "@/components/TeamHeader.tsx";

export default function Players() {
  const { teamId } = useParams();

  return (
    <>
      <TeamHeader teamId={teamId} />
      <PlayerList teamId={teamId} />
      <hr className="my-4" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
