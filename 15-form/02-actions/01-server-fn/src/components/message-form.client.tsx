"use client";

import { toast } from "sonner";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Textarea,
} from "@/components/ui/index.ts";
import { postAction } from "@/server/post-action.ts";

export default function MessageForm() {
  async function action(formData: FormData) {
    try {
      await postAction(formData);
    } catch (error) {
      toast("⚠️ " + (error as Error).message);
    }
  }

  return (
    <Card className="pb-5">
      <form action={action}>
        <CardContent>
          <Textarea
            name="body"
            placeholder="メッセージを入力..."
            className="min-h-20"
          />
        </CardContent>
        <CardFooter className="mt-4 flex justify-end">
          <Button type="submit">投稿する</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
