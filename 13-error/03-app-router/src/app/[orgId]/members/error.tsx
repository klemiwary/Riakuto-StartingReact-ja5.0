'use client';

import { Button } from '@/components/ui/button.tsx';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-6">
        <div className="text-xl">
          API エラーが発生しました。時間を置いてから再試行してみてください。
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" onClick={reset} className="mt-4">
            再試行する
          </Button>
        </div>
      </div>
    </div>
  );
}
