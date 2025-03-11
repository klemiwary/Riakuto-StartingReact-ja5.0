"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { addMessage } from "@/server/message-fn.ts";

export default function MessageForm() {
  const [result, formAction, isPending] = useActionState(addMessage, {
    status: "succeeded",
  });

  return (
    <>
      <Card className="pb-5">
        <form action={formAction}>
          <CardContent>
            <Textarea
              name="body"
              placeholder="メッセージを入力..."
              className="min-h-20"
              disabled={isPending}
            />
          </CardContent>
          <CardFooter className="mt-4 flex items-start justify-between">
            <div className="text-destructive pl-2 text-sm">
              {result.status === "failed" && `⚠️ ${result.error}`}
            </div>
            <Button type="submit" disabled={isPending}>
              {isPending ? "送信中..." : "投稿する"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
