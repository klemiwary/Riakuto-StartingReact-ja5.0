import { getOrganization } from "@/entities/data-reader.ts";

interface OrgHeaderProps {
  orgId: string;
}

export default function OrgHeader({ orgId }: OrgHeaderProps) {
  if (orgId === "error") {
    throw new Error(`Intentional Error!`);
  }
  const org = getOrganization(orgId);

  if (!org) {
    throw new Error(`Not found organization '${orgId}'`, { cause: 404 });
  }

  return (
    <>
      <title>{`${org.name}の開発メンバー`}</title>
      <h2 className="mb-12 text-center">{org.name} の開発メンバー</h2>
    </>
  );
}
