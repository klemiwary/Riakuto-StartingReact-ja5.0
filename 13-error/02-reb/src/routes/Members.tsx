import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, Navigate, useParams } from "react-router";
import { Loader2 } from "lucide-react";
import MemberList from "@/components/MemberList.tsx";
import OrgHeader from "@/components/OrgHeader.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";
import { useToast } from "@/hooks/use-toast.ts";
import MembersError from "./_MembersError.tsx";

export default function Members() {
  const { orgId } = useParams();
  const { toast } = useToast();

  if (!orgId) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ErrorBoundary
        FallbackComponent={MembersError}
        onReset={() => {
          toast({ description: "⚠️ 再試行されました" });
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
      <Loader2 className="size-12 animate-spin text-primary" />
    </div>
  );
}
