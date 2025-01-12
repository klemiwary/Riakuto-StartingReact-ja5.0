import { data } from "react-router";
import MemberList from "~/components/member-list.tsx";
import { getMembers, getOrganization } from "~/lib/data-reader.ts";
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
//   return { "Cache-Control": "public, max-age=6000, s-maxage=6000" };
// }

export function meta({ data }: Route.MetaArgs) {
  return [{ title: `${data.org.name}の開発メンバー` }];
}

export default function Members({ loaderData }: Route.ComponentProps) {
  const { org, members } = loaderData;

  return (
    <>
      <h2 className="mb-12 text-center">{org.name}の開発メンバー</h2>
      <MemberList members={members} />
    </>
  );
}
