import { notFound } from "next/navigation";
import MemberCard from "@/components/member-card.tsx";
import { getMembers, getOrganization } from "@/lib/data-reader.ts";

interface OrgMembersProps {
  params: Promise<{ orgId: string }>;
}

function generateTitle(orgId: string) {
  const org = getOrganization(orgId) || notFound();

  return `${org.name}の開発メンバー`;
}

export async function generateMetadata({ params }: OrgMembersProps) {
  const { orgId } = await params;
  const title = generateTitle(orgId);

  return { title };
}

export default async function Players({ params }: OrgMembersProps) {
  const { orgId } = await params;
  const title = generateTitle(orgId);
  const members = await getMembers(orgId);

  return (
    <>
      <h2 className="mb-12 text-center">{title}</h2>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <MemberCard member={member} key={member.id} />
        ))}
      </div>
    </>
  );
}
