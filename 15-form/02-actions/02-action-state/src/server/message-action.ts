"use server";

import { revalidatePath } from "next/cache";
import { addMessage } from "@/entities/message-service.ts";
import type { MessageResult } from "@/entities/message-type.ts";

export async function postAction(
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

  await addMessage(body);
  revalidatePath("/");

  return { status: "succeeded" };
}
