"use server";

import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import type { Message, MessageResult } from "@/message.d.ts";

const messages: Message[] = [];

export async function addMessage(
  _prevResult: MessageResult,
  formData: FormData,
): Promise<MessageResult> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const value = formData.get("body");
  const body = typeof value === "string" ? value.trim() : "";

  if (!body) {
    return {
      status: "failed",
      error: "メッセージ本文が空です",
    };
  }

  messages.push({
    id: uuidv4(),
    body,
    createdAt: new Date(),
  });
  revalidatePath("/");

  return { status: "succeeded" };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getMessages() {
  return [...messages].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
}
