import { href, redirect } from "react-router";
import { parseWithZod } from "@conform-to/zod";
import RegistrationForm from "~/components/registration-form.tsx";
import { UserRegisterSchema } from "~/domains/schema.ts";
import { addUser } from "~/domains/users.ts";
import { createUserWithForm } from "~/lib/form.ts";
import type { Route } from "./+types/register";

const title = "ユーザー登録フォーム";

export function meta() {
  return [{ title }];
}

export async function action({ request }: Route.ActionArgs) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const formData = await request.formData();
  console.log(formData);
  const submission = parseWithZod(formData, {
    schema: UserRegisterSchema,
  });

  if (submission.status !== "success") {
    return { lastResult: submission.reply() };
  }

  await addUser(createUserWithForm(formData));

  return redirect(href("/registered"), 302);
}

export default function RegisterPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="my-16 flex flex-col items-center gap-12">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <main className="w-full max-w-md">
        <RegistrationForm lastResult={actionData?.lastResult} />
      </main>
    </div>
  );
}
