import type { Metadata } from "next";
import PlayerList from "@/components/player-list.tsx";

const title = "全チームの選手";

export const metadata: Metadata = { title };

export default function Players() {
  return (
    <>
      <h2 className="mb-12 text-center">{title}</h2>
      <PlayerList />
    </>
  );
}
