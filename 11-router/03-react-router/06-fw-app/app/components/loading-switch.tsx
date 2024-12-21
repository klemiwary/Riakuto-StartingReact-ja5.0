import { useSearchParams } from "react-router";
import { Label } from "~/components/ui/label.tsx";
import { Switch } from "~/components/ui/switch.tsx";

export default function LoadingSwitch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = !!searchParams.get("loading");
  const handleLoading = (checked: boolean) =>
    checked ? setSearchParams("loading=true") : setSearchParams("loading=");

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
