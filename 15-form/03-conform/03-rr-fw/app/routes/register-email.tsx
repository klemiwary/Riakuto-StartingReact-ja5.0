import { href, redirect } from "react-router";
import { parseWithZod } from "@conform-to/zod";
import RegistrationFormEmail from "~/components/registration-email-form.tsx";
import { addUser, isEmailUnique } from "~/entities/user-api.ts";
import { createUserFromForm } from "~/entities/user-lib.ts";
import { createRegisterSchema } from "~/entities/user-schema.ts";
import type { Route } from "./+types/register";

const title = `${import.meta.env.VITE_APP_TITLE}（要メールアドレス）`;

export function meta() {
  return [{ title }];
}

export async function action({ request }: Route.ActionArgs) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const formData = await request.formData();
  const submission = await parseWithZod(formData, {
    schema: (intent) => createRegisterSchema(intent, { isEmailUnique }),
    async: true,
  });

  if (submission.status !== "success") {
    return { lastResult: submission.reply() };
  }

  await addUser(createUserFromForm(formData));

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
