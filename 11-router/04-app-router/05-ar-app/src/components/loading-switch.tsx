"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label.tsx";
import { Switch } from "@/components/ui/switch.tsx";

export default function LoadingSwitch() {
  const searchParams = useSearchParams();
  const isLoading = !!searchParams.get("loading");
  const router = useRouter();

  const handleLoading = (checked: boolean) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    const value = checked ? "true" : "";
    currentSearchParams.set("loading", value);
    const dest = "?" + currentSearchParams.toString();
    router.push(dest);
  };

  return (
    <div className="mr-4 mt-10 flex flex-row-reverse">
      <div className="flex items-center space-x-2">
        <Switch
          id="loading"
          checked={isLoading}
          onCheckedChange={handleLoading}
        />
        <Label htmlFor="loading">ローディング状態</Label>
      </div>
    </div>
  );
}
