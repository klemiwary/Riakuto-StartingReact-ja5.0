import OrgList from "~/components/org-list.tsx";
import { getAllOrganizations } from "~/entities/data-reader.ts";
import type { Route } from "./+types/home.ts";

const title = import.meta.env.VITE_APP_TITLE;

export function loader() {
  const orgs = getAllOrganizations();

  return { orgs };
}

export default function home({ loaderData }: Route.ComponentProps) {
  const { orgs } = loaderData;

  return (
    <>
      <title>{title}</title>
      <h2 className="mb-12 text-center">🏢 表示可能な組織</h2>
      <OrgList orgs={orgs} />
    </>
  );
}
