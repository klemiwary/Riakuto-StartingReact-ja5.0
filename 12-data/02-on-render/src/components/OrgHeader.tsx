import { Navigate } from "react-router";
import { getOrganization } from "@/lib/data-reader.ts";

interface OrgHeaderProps {
  orgId: string;
}

export default function OrgHeader({ orgId }: OrgHeaderProps) {
  const org = getOrganization(orgId);

  if (!org) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <title>{`${org.name}の開発メンバー`}</title>
      <h2 className="mb-12 text-center">{org.name} の開発メンバー</h2>
    </>
  );
}
