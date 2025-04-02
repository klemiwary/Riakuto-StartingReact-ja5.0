"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto p-4 pt-16">
      <h2>何らかのエラーが発生しました</h2>
      <p>{error.message}</p>
      {error.stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{error.stack}</code>
        </pre>
      )}
    </div>
  );
}
