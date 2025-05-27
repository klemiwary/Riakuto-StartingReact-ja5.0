import { v4 as uuidv4 } from "uuid";
import type { Message } from "@/entities/types.ts";

const messages: Message[] = [];

export async function addMessage(body: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  if (!body) throw new Error("メッセージ本文が空です");

  messages.push({
    id: uuidv4(),
    body,
    createdAt: new Date(),
  });
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getMessages() {
  return [...messages].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
}
