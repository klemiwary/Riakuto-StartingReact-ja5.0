"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { createEmailSchema, UserRegisterSchema } from "@/domains/schema.ts";
import type { GenderCode, User } from "@/domains/types.ts";
import { addUser, isEmailUnique } from "@/domains/users.ts";

export async function registerAction(_prevResult: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const submission = parseWithZod(formData, {
    schema: UserRegisterSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await addUser(createUserWithForm(formData));

  redirect("/registered");
}

export async function registerActionWithEmail(
  _prevResult: unknown,
  formData: FormData,
) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const submission = await parseWithZod(formData, {
    schema: (intent) =>
      UserRegisterSchema.merge(createEmailSchema(intent, { isEmailUnique })),
    async: true,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await addUser(createUserWithForm(formData));

  redirect("/registered");
}

function createUserWithForm(formData: FormData): Omit<User, "id"> {
  const username = (formData.get("username") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim();
  const zipcode =
    (formData.get("zipcode") as string | null)?.replace(/-/g, "") || undefined;
  const gender = (formData.get("gender") as GenderCode | null) || undefined;

  return { username, email, zipcode, gender };
}
