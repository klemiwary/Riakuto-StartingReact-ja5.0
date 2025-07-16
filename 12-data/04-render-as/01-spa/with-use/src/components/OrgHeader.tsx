import { Navigate } from "react-router";
import { getOrganization } from "@/entities/data-reader.ts";

interface OrgHeaderProps {
  orgId: string;
}

export default function OrgHeader({ orgId }: OrgHeaderProps) {
  const org = getOrganization(orgId);
  const orgName = org?.name;

  if (orgId && !org) {
    return <Navigate to="/" replace />;
  }

  const title = `${orgName} の開発メンバー`;

  return (
    <>
      <title>{title}</title>
      <h2 className="mb-12 text-center">{title}</h2>
    </>
  );
}
