import { Navigate } from "react-router";
import { getOrganization } from "@/entities/data-reader.ts";

interface OrgHeaderProps {
  orgId: string;
}

export default function OrgHeader({ orgId }: OrgHeaderProps) {
  const org = getOrganization(orgId);

  if (!org) {
    return <Navigate to="/" replace />;
  }

  const title = `${org.name} の開発メンバー`;

  return (
    <>
      <title>{title}</title>
      <h2 className="mb-12 text-center">{title}</h2>
    </>
  );
}
