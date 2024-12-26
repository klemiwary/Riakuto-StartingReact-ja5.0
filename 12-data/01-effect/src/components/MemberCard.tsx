import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { Member } from "@/dev-members.d.ts";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <a
      key={member.id}
      href={`https://github.com/${member.login}`}
      target="_blank"
      rel="noreferrer"
      className="block transition-transform hover:scale-105"
    >
      <Card className="flex items-center gap-4 p-4">
        <Avatar className="size-12">
          <AvatarImage src={member.avatarUrl} alt={member.login} />
          <AvatarFallback>
            {member.login.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm font-semibold leading-none">{member.login}</p>
          <p className="whitespace-nowrap text-sm text-muted-foreground">
            GitHub ID: {member.id}
          </p>
        </div>
      </Card>
    </a>
  );
}
