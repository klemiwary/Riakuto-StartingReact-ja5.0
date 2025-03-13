import { useEffect, useRef } from "react";
import { Form, useNavigation } from "react-router";
import { Button } from "~/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "~/components/ui/card.tsx";
import { Textarea } from "~/components/ui/textarea.tsx";

interface MessageFormProps {
  errorMessage?: string;
}

export default function MessageForm({ errorMessage }: MessageFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      formRef.current?.reset();
    }
  }, [navigation.state]);

  return (
    <Card className="pb-5">
      <Form method="post" ref={formRef}>
        <CardContent>
          <Textarea
            name="body"
            placeholder="メッセージを入力..."
            className="min-h-20"
            disabled={navigation.state !== "idle"}
          />
        </CardContent>
        <CardFooter className="mt-4 flex items-start justify-between">
          <div className="text-destructive pl-2 text-sm">
            {errorMessage && `⚠️ ${errorMessage}`}
          </div>
          <Button type="submit" disabled={navigation.state !== "idle"}>
            投稿する
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
