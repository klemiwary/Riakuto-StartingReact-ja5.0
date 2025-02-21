import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, Navigate, useParams } from "react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import MemberList from "@/components/MemberList.tsx";
import OrgHeader from "@/components/OrgHeader.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import MembersError from "./_MembersError.tsx";

export default function Members() {
  const { orgId } = useParams();

  if (!orgId) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ErrorBoundary
        FallbackComponent={MembersError}
        onReset={() => {
          toast("⚠️ 再試行されました");
        }}
      >
        <OrgHeader orgId={orgId} />
        <Suspense fallback={<Loading />}>
          <MemberList orgId={orgId} />
        </Suspense>
      </ErrorBoundary>
      <hr className="mb-4 mt-8" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
      <Toaster />
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
