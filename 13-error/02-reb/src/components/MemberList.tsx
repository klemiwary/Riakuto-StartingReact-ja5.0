import useSWR from "swr";
import { getMembers } from "@/entities/data-reader.ts";
import MemberCard from "./MemberCard.tsx";

interface MemberListProps {
  orgId: string;
}

export default function MemberList({ orgId }: MemberListProps) {
  const { data: members } = useSWR(orgId, getMembers, { suspense: true });

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <MemberCard member={member} key={member.id} />
      ))}
    </div>
  );
}
