import { href, redirect } from "react-router";
import { parseWithZod } from "@conform-to/zod";
import RegistrationFormEmail from "~/components/registration-email-form.tsx";
import { createEmailSchema, UserRegisterSchema } from "~/domains/schema.ts";
import { addUser, isEmailUnique } from "~/domains/users.ts";
import { createUserWithForm } from "~/lib/form.ts";
import type { Route } from "./+types/register";

const title = "ユーザー登録フォーム（要メールアドレス）";

export function meta() {
  return [{ title }];
}

export async function action({ request }: Route.ActionArgs) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const formData = await request.formData();
  const submission = await parseWithZod(formData, {
    schema: (intent) =>
      UserRegisterSchema.merge(createEmailSchema(intent, { isEmailUnique })),
    async: true,
  });

  if (submission.status !== "success") {
    return { lastResult: submission.reply() };
  }

  await addUser(createUserWithForm(formData));

  return redirect(href("/registered"));
}

export default function RegisterPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="my-16 flex flex-col items-center gap-12">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <main className="w-full max-w-md">
        <RegistrationFormEmail lastResult={actionData?.lastResult} />
      </main>
    </div>
  );
}
