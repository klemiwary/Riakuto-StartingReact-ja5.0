import { use } from "react";
import type { Member } from "@/dev-members.d.ts";
import MemberCard from "./MemberCard.tsx";

interface MemberListProps {
  membersPromise: Promise<Member[]>;
}

export default function MemberList({ membersPromise }: MemberListProps) {
  const members = use(membersPromise);

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <MemberCard member={member} key={member.id} />
      ))}
    </div>
  );
}
