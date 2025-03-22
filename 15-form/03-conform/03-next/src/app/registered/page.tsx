import type { Metadata } from "next";
import UserList from "@/components/user-list.tsx";

const title = "登録完了";
export const metadata: Metadata = { title };

export default function RegisteredPage() {
  return (
    <div className="my-16 flex flex-col items-center gap-12">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <main className="w-full max-w-md">
        <div className="mt-8 mb-16 text-center">
          ユーザー登録が完了しました。
        </div>
        <UserList />
      </main>
    </div>
  );
}
