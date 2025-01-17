import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="my-14 flex h-80 items-center justify-center">
      <Loader2 className="size-12 animate-spin text-primary" />
    </div>
  );
}
