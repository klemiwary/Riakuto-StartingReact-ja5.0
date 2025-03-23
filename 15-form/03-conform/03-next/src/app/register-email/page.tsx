import type { Metadata } from "next";
import RegistrationEmailForm from "@/components/registration-email-form.tsx";

const title = "ユーザー登録フォーム（要メールアドレス）";

export const metadata: Metadata = { title };

export default function RegisterEmailPage() {
  return (
    <div className="my-16 flex flex-col items-center gap-12">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <main className="w-full max-w-md">
        <RegistrationEmailForm />
      </main>
    </div>
  );
}
