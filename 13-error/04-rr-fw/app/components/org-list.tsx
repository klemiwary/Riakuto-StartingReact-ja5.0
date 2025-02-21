import { href, Link } from "react-router";
import { CircleCheck } from "lucide-react";
import type { Organization } from "~/dev-members.d.ts";

interface OrgListProps {
  orgs: Organization[];
}

export default function OrgList({ orgs }: OrgListProps) {
  const bullet = <CircleCheck className="mr-[0.4em] size-4 text-blue-800" />;

  return (
    <ul className="my-6 space-y-2">
      {orgs.map((org) => (
        <li key={org.id} className="flex items-center">
          {bullet}
          <Link to={href("/:orgId/members", { orgId: org.id })}>
            {org.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
