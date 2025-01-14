import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import type { Member } from "@/dev-members.d.ts";
import { getMembers } from "@/lib/data-reader.ts";
import MemberCard from "./MemberCard.tsx";

interface MemberListProps {
  orgId: string;
}

export default function MemberList({ orgId }: MemberListProps) {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);

      try {
        const membersData = await getMembers(orgId);
        setMembers(membersData);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          throw new Error("GitHub API Error", { cause: error });
        }
      } finally {
        setIsLoading(false);
      }
    }

    void fetchMembers();
  }, [orgId]);

  return isLoading ? (
    <div className="my-14 flex h-80 items-center justify-center">
      <Loader2 className="size-12 animate-spin text-primary" />
    </div>
  ) : (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <MemberCard member={member} key={member.id} />
      ))}
    </div>
  );
}
