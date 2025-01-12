import { notFound } from "next/navigation";
import MemberList from "@/components/member-list.tsx";
import { getMembers, getOrganization } from "@/lib/data-reader.ts";

interface MembersProps {
  params: Promise<{ orgId: string }>;
}

function generateTitle(orgId: string) {
  const org = getOrganization(orgId) || notFound();

  return `${org.name}の開発メンバー`;
}

export async function generateMetadata({ params }: MembersProps) {
  const { orgId } = await params;
  const title = generateTitle(orgId);

  return { title };
}

export default async function Players({ params }: MembersProps) {
  const { orgId } = await params;
  const title = generateTitle(orgId);
  const members = await getMembers(orgId);

  return (
    <>
      <h2 className="mb-12 text-center">{title}</h2>
      <MemberList members={members} />
    </>
  );
}
