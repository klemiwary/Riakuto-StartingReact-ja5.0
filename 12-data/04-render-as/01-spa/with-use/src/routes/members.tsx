import { Suspense } from "react";
import { Link, Navigate, useParams } from "react-router";
import { Loader2 } from "lucide-react";
import MemberList from "@/components/MemberList.tsx";
import OrgHeader from "@/components/OrgHeader.tsx";
import { getMembers } from "@/lib/data-reader.ts";

export default function Members() {
  const { orgId } = useParams();

  if (!orgId) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <OrgHeader orgId={orgId} />
      <Suspense fallback={<Loading />}>
        <MemberList membersPromise={getMembers(orgId)} />
      </Suspense>
      <hr className="mb-4 mt-8" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
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
