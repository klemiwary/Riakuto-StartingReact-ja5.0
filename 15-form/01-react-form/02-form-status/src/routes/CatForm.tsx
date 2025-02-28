import { useState, useTransition } from "react";
import { toast } from "sonner";
import StatusCat from "@/components/StatusCat.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { dummyApi } from "@/lib/dummy-api.ts";
import { type FormData } from "@/types/form.ts";

export default function CatForm() {
  const [formData, setFormData] = useState<FormData>({ username: "" });
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(async () => {
      try {
        await dummyApi(formData);
        toast("🎉️ 登録されました");
      } catch (_err) {
        toast("⚠️ 不正な入力エラー");
      }
    });
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const value = event.target.value;
    setFormData((state) => ({ ...state, [name]: value }));
  }

  return (
    <Card className="w-md max-w-md p-5 shadow-md">
      <CardContent className="px-1 py-2">
        <form onSubmit={handleSubmit}>
          <StatusCat />
          <Label className="mb-2 block">ユーザー名（必須）</Label>
          <Input
            name="username"
            value={formData.username}
            onChange={handleInput}
            className="mb-4 w-full"
          />
          <Label className="mb-2 block">郵便番号</Label>
          <Input
            name="zipcode"
            value={formData.zipcode ?? ""}
            onChange={handleInput}
            className="mb-4 w-full"
          />
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="w-2/3 bg-blue-500 text-white hover:bg-blue-400"
              disabled={isPending || !formData.username.trim()}
            >
              {isPending ? "送信中…" : "送信"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
