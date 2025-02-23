import { Link, Navigate, useParams } from "react-router";
import MemberList from "@/components/MemberList.tsx";
import OrgHeader from "@/components/OrgHeader.tsx";

export default function Members() {
  const { orgId } = useParams();

  if (!orgId) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <OrgHeader orgId={orgId} />
      <MemberList orgId={orgId} />
      <hr className="mt-8 mb-4" />
      <div className="flex justify-center">
        <Link to="/">🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
