import { getOrganization } from "@/lib/data-reader.ts";

interface OrgHeaderProps {
  orgId: string;
}

export default function OrgHeader({ orgId }: OrgHeaderProps) {
  const org = getOrganization(orgId);
  const orgName = org?.name;

  if (orgId && !org) {
    throw new Error(`Not found organization '${orgId}'`, { cause: 404 });
  } else if (orgId === "error") {
    throw new Error(`Intentional Error!`);
  }

  return (
    <>
      <title>{`${orgName}の開発メンバー`}</title>
      <h2 className="mb-12 text-center">{orgName} の開発メンバー</h2>
    </>
  );
}
