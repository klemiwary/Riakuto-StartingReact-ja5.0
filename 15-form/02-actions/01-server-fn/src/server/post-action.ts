"use server";

import { revalidatePath } from "next/cache";
import { addMessage } from "@/entities/message-api.ts";

export async function postAction(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const value = formData.get("body");
  const body = typeof value === "string" ? value.trim() : "";

  if (!body) throw new Error("メッセージ本文が空です");

  await addMessage(body);
  revalidatePath("/");
}
