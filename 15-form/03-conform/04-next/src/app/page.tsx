import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const title = "フォームリスト";
export const metadata: Metadata = { title };

const pageList = [
  { name: "メールアドレスなし", path: "/register" },
  { name: "メールアドレスあり（重複チェック）", path: "/register-email" },
];

export default function Home() {
  const bullet = <ChevronRight className="mr-[0.4em] size-4 text-cyan-700" />;

  return (
    <div>
      <h1 className="mt-16 text-center text-2xl font-bold text-gray-900">
        {title}
      </h1>
      <main className="mt-10 w-full max-w-md px-4">
        <ul className="my-6 space-y-3">
          {pageList.map((page) => (
            <li key={page.path} className="flex items-center">
              {bullet}
              <Link href={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
