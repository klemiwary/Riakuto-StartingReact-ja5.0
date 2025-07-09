import { data } from "react-router";
import MemberList from "~/components/member-list.tsx";
import { getMembers, getOrganization } from "~/entities/data-reader.ts";
import type { Route } from "./+types/members.ts";

export async function loader({ params }: Route.LoaderArgs) {
  const org = getOrganization(params.orgId);

  if (!org) {
    throw data(`not found organization '${params.orgId}'`, { status: 404 });
  }

  const members = await getMembers(params.orgId);

  return { org, members };
}

// export function headers(_: Route.HeadersArgs) {
//   return { "Cache-Control": "public, max-age=3600, s-maxage=3000" };
// }

export default function Members({ loaderData }: Route.ComponentProps) {
  const { org, members } = loaderData;
  const title = `${org.name} の開発メンバー`;

  return (
    <>
      <title>{title}</title>
      <h2 className="mb-12 text-center">{title}</h2>
      <MemberList members={members} />
    </>
  );
}
