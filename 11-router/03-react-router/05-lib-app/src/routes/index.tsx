import TeamList from "@/components/TeamList.tsx";

const appTitle = import.meta.env.VITE_APP_TITLE;

export default function Index() {
  return (
    <>
      <title>{appTitle}</title>
      <h2 className="mb-12 text-center">🏀 高校チーム別一覧</h2>
      <TeamList />
    </>
  );
}
