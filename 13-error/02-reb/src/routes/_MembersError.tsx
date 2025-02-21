import type { FallbackProps } from "react-error-boundary";
import { Button } from "@/components/ui/button.tsx";

export default function MembersError({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="flex items-center justify-center py-20">
      {error instanceof Error && error.cause === 404 ? (
        <div className="flex items-center gap-6">
          <div className="text-2xl font-medium leading-none">404</div>
          <div className="bg-border h-16 w-px" />
          <div className="flex flex-col">
            <div className="text-xl">その組織は見つかりませんでした</div>
            <div className="text-lg text-gray-400">{error.message}</div>
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
              onClick={resetErrorBoundary}
              className="mt-4"
            >
              再試行する
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
