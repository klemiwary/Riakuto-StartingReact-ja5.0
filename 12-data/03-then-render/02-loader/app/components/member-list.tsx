import type { Member } from "~/entities/types.ts";
import MemberCard from "./member-card.tsx";

interface MemberListProps {
  members: Member[];
}

export default function MemberList({ members }: MemberListProps) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <MemberCard member={member} key={member.id} />
      ))}
    </div>
  );
}
