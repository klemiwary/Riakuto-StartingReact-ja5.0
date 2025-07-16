import { useEffect, useRef } from "react";
import { useFetcher } from "react-router";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Textarea,
} from "~/components/ui/index.ts";
import type { action } from "~/routes/home.tsx";

interface MessageFormProps {
  errorMessage?: string;
}

export default function MessageForm({ errorMessage }: MessageFormProps) {
  const fetcher = useFetcher<typeof action>();
  const formRef = useRef<HTMLFormElement>(null);
  const errMsg = errorMessage ?? fetcher.data?.errorMessage;

  useEffect(() => {
    if (fetcher.state === "idle") {
      formRef.current?.reset();
    }
  }, [fetcher.state]);

  return (
    <Card className="pb-5">
      <fetcher.Form method="post" ref={formRef}>
        <CardContent>
          <Textarea
            name="body"
            placeholder="メッセージを入力..."
            className="min-h-20"
            disabled={fetcher.state !== "idle"}
          />
        </CardContent>
        <CardFooter className="mt-4 flex items-start justify-between">
          <div className="text-destructive pl-2 text-sm">
            {errMsg && `⚠️ ${errMsg}`}
          </div>
          <Button type="submit" disabled={fetcher.state !== "idle"}>
            {fetcher.state === "idle" ? "投稿する" : "送信中…"}
          </Button>
        </CardFooter>
      </fetcher.Form>
    </Card>
  );
}
