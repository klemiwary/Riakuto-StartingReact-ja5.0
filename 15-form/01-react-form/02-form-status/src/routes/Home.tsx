import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const pageList = [
  { name: "state で管理しているフォーム", path: "state-form" },
  { name: "useTransition で管理しているフォーム", path: "transition-form" },
  {
    name: "子コンポーネントで useFormStatus を使ったフォーム",
    path: "cat-form",
  },
];

export default function Home() {
  const bullet = <ChevronRight className="mr-[0.4em] size-4 text-cyan-700" />;

  return (
    <ul className="my-6 space-y-3">
      {pageList.map((page) => (
        <li key={page.path} className="flex items-center">
          {bullet}
          <Link to={page.path}>{page.name}</Link>
        </li>
      ))}
    </ul>
  );
}
