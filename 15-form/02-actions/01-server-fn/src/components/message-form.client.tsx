"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { addMessage } from "@/server/message-fn.ts";

export default function MessageForm() {
  async function formAction(formData: FormData) {
    try {
      await addMessage(formData);
    } catch (error) {
      toast("⚠️ " + (error as Error).message);
    }
  }

  return (
    <Card className="pb-5">
      <form action={formAction}>
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
