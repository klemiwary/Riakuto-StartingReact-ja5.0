import { Suspense } from "react";
import { Await, data } from "react-router";
import { Loader2 } from "lucide-react";
import MemberList from "~/components/member-list.tsx";
import { getMembers, getOrganization } from "~/entities/data-reader.ts";
import type { Route } from "./+types/members.ts";

export function loader({ params }: Route.LoaderArgs) {
  if (params.orgId === "error") {
    throw data(`Intentional Error!`, { status: 500 });
  }

  const org = getOrganization(params.orgId);

  if (!org) {
    throw data(`not found organization '${params.orgId}'`, { status: 404 });
  }

  const members = getMembers(params.orgId);

  return { org, members };
}

export function meta({ data }: Route.MetaArgs) {
  return [{ title: `${data.org.name}の開発メンバー` }];
}

export default function Members({ loaderData }: Route.ComponentProps) {
  const { org, members } = loaderData;

  return (
    <>
      <h2 className="mb-12 text-center">{org.name}の開発メンバー</h2>
      <Suspense fallback={<Loading />}>
        <Await resolve={members}>
          {(resolvedMembers) => <MemberList members={resolvedMembers} />}
        </Await>
      </Suspense>
    </>
  );
}

function Loading() {
  return (
    <div className="my-14 flex h-80 items-center justify-center">
      <Loader2 className="text-primary size-12 animate-spin" />
    </div>
  );
}
