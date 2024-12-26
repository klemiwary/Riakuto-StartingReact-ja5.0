import OrgList from "@/components/OrgList.tsx";

const appTitle = import.meta.env.VITE_APP_TITLE;

export default function Index() {
  return (
    <>
      <title>{appTitle}</title>
      <h2 className="mb-12 text-center">🏢 表示可能な組織</h2>
      <OrgList />
    </>
  );
}
