import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { formatDate } from "@/lib/date.ts";
import type { Message } from "@/message.d.ts";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>メッセージ一覧（{messages.length}件）</CardTitle>
      </CardHeader>
      <CardContent>
        {messages.length === 0 ? (
          <p className="text-muted-foreground py-8 text-center">
            まだメッセージがありません。
          </p>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="bg-card rounded-lg border p-4">
                <p className="mb-2 whitespace-pre-wrap">{message.body}</p>
                <p className="text-muted-foreground text-xs">
                  {formatDate(message.createdAt)}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
