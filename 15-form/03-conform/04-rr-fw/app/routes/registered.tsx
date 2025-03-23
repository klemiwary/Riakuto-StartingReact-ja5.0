import UserList from "~/components/user-list.tsx";
import { getUsers } from "~/domains/users.ts";
import type { Route } from "./+types/registered";

const title = "登録完了";

export function meta() {
  return [{ title }];
}

export function loader() {
  const users = getUsers();

  return { users };
}

export default function RegisteredPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="my-16 flex flex-col items-center gap-12">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <main className="w-full max-w-md">
        <div className="mt-8 mb-16 text-center">
          ユーザー登録が完了しました。
        </div>
        <UserList users={loaderData.users} />
      </main>
    </div>
  );
}
