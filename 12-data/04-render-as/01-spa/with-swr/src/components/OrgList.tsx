import { Link } from "react-router";
import { CircleCheck } from "lucide-react";
import { getAllOrganizations } from "@/entities/data-reader.ts";

export default function OrgList() {
  const bullet = <CircleCheck className="mr-[0.4em] size-4 text-blue-800" />;

  return (
    <ul className="my-6 space-y-2">
      {getAllOrganizations().map((org) => (
        <li key={org.id} className="flex items-center">
          {bullet}
          <Link to={`${org.id}/members`}>{org.name}</Link>
        </li>
      ))}
    </ul>
  );
}
