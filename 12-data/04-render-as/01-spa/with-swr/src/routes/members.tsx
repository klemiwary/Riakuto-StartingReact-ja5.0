import { Suspense } from "react";
import { Link, Navigate, useParams } from "react-router";
import { Loader2 } from "lucide-react";
import MemberList from "@/components/MemberList.tsx";
import OrgHeader from "@/components/OrgHeader.tsx";

function Loading() {
  return (
    <div className="my-14 flex h-80 items-center justify-center">
      <Loader2 className="size-12 animate-spin text-primary" />
    </div>
  );
}

export default function Members() {
  const { orgId } = useParams();

  if (!orgId) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <OrgHeader orgId={orgId} />
      <Suspense fallback={<Loading />}>
        <MemberList orgId={orgId} />
      </Suspense>
      <hr className="mb-4 mt-8" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
