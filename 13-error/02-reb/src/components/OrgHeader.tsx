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

  const title = `${org.name} の開発メンバー`;

  return (
    <>
      <title>{title}</title>
      <h2 className="mb-12 text-center">{title}</h2>
    </>
  );
}
