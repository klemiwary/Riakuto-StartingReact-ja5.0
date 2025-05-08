"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import type { GenderCode, User } from "@/entities/types.ts";
import { addUser, isEmailUnique } from "@/entities/user-api.ts";
import {
  createRegisterSchema,
  userRegisterSchema,
} from "@/entities/user-schema.ts";

export async function registerAction(_prevResult: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const submission = parseWithZod(formData, {
    schema: userRegisterSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await addUser(createUserFromForm(formData));

  redirect("/registered");
}

export async function registerActionWithEmail(
  _prevResult: unknown,
  formData: FormData,
) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const submission = await parseWithZod(formData, {
    schema: (intent) => createRegisterSchema(intent, { isEmailUnique }),
    async: true,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await addUser(createUserFromForm(formData));

  redirect("/registered");
}

function createUserFromForm(formData: FormData): Omit<User, "id"> {
  const username = (formData.get("username") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim();
  const zipcode =
    (formData.get("zipcode") as string | null)?.replace(/-/g, "") || undefined;
  const gender = (formData.get("gender") as GenderCode | null) || undefined;

  return { username, email, zipcode, gender };
}
