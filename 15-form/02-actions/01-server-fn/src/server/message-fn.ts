"use server";

import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import type { Message } from "@/message.d.ts";

const messages: Message[] = [];

export async function addMessage(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const body = (formData.get("body") as string).trim();

  if (!body) throw new Error("メッセージ本文が空です");

  messages.push({
    id: uuidv4(),
    body,
    createdAt: new Date(),
  });
  revalidatePath("/");
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getMessages() {
  return [...messages].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
}
