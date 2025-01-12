import OrgList from "@/components/org-list.tsx";
import { getAllOrganizations } from "@/lib/data-reader.ts";

export default function Index() {
  const orgs = getAllOrganizations();

  return (
    <>
      <h2 className="mb-12 text-center">🏢 表示可能な組織</h2>
      <OrgList orgs={orgs} />
    </>
  );
}
