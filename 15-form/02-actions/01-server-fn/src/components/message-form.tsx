"use client";

import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { postAction } from "@/server/message-action.ts";

export default function MessageForm() {
  return (
    <Card className="pb-5">
      <form action={postAction}>
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
