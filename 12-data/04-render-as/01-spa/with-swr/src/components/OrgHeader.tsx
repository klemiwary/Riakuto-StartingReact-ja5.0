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

  return (
    <>
      <title>{`${orgName}の開発メンバー`}</title>
      <h2 className="mb-12 text-center">{orgName} の開発メンバー</h2>
    </>
  );
}
