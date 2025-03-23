import { href, Link, Outlet } from "react-router";

export default function RegisteredLayout() {
  return (
    <>
      <Outlet />
      <hr className="my-4" />
      <div className="flex justify-center">
        <Link to={href("/")}>🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
