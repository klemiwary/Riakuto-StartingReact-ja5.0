import { useEffect } from "react";
import {
  isRouteErrorResponse,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router";
import { toast } from "sonner";
import { Button } from "~/components/ui/button.tsx";
import { Toaster } from "~/components/ui/sonner.tsx";
import type { Route } from "./+types/members.ts";

export default function MembersError() {
  return <Outlet />;
}

export function ErrorBoundary({ params, error }: Route.ErrorBoundaryProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state === "reset") {
      toast("⚠️ 再試行されました");
    }
  }, [location]);

  return (
    <>
      <div className="flex items-center justify-center py-20">
        {isRouteErrorResponse(error) && error.status === 404 ? (
          <div className="flex items-center gap-6">
            <div className="text-2xl font-medium leading-none">404</div>
            <div className="bg-border h-16 w-px" />
            <div className="flex flex-col">
              <div className="text-xl">その組織は見つかりませんでした</div>
              <div className="text-lg text-gray-400">
                {`Not found organization ${params.orgId}`}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <div className="text-xl">
              API エラーが発生しました。時間を置いてから再試行してみてください。
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                onClick={() =>
                  void navigate(location.pathname, {
                    replace: true,
                    state: "reset",
                  })
                }
                className="mt-4"
              >
                再試行する
              </Button>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
}
