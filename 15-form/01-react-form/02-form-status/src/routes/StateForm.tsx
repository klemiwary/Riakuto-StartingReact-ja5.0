import { useState } from "react";
import { toast } from "sonner";
import {
  Button,
  Card,
  CardContent,
  Input,
  Label,
} from "@/components/ui/index.ts";
import { registerUser } from "@/entities/register-user.ts";
import { type RegData } from "@/entities/types.ts";

export default function StateForm() {
  const [regData, setRegData] = useState<RegData>({ username: "" });
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    try {
      await registerUser(regData);
      toast("🎉️ 登録されました");
    } catch (_err) {
      toast("⚠️ 不正な入力エラー");
    } finally {
      setIsPending(false);
    }
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const value = event.target.value;
    setRegData((state) => ({ ...state, [name]: value }));
  }

  return (
    <Card className="w-md max-w-md p-5 shadow-md">
      <CardContent className="px-1 py-2">
        <form onSubmit={(data) => void handleSubmit(data)}>
          <fieldset className="mb-4">
            <Label className="mb-2 block">ユーザー名（必須）</Label>
            <Input
              name="username"
              value={regData.username}
              onChange={handleInput}
              className="w-full"
            />
          </fieldset>
          <fieldset className="mb-4">
            <Label className="mb-2 block">郵便番号</Label>
            <Input
              name="zipcode"
              maxLength={7}
              value={regData.zipcode ?? ""}
              onChange={handleInput}
              className="w-full"
            />
          </fieldset>
          <fieldset className="flex justify-center pt-4">
            <Button
              type="submit"
              className="w-2/3 bg-blue-500 text-white hover:bg-blue-400"
              disabled={isPending || !regData.username.trim()}
            >
              {isPending ? "送信中…" : "送信"}
            </Button>
          </fieldset>
        </form>
      </CardContent>
    </Card>
  );
}
