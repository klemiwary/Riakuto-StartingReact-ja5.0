"use client";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Textarea,
} from "@/components/ui/index.ts";
import { postAction } from "@/server/post-action.ts";

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
