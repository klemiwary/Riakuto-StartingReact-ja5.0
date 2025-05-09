import Link from "next/link";

export default function PlayersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <hr className="my-4" />
      <div className="flex justify-center">
        <Link href="/">🔝 トップへ戻る</Link>
      </div>
    </>
  );
}
