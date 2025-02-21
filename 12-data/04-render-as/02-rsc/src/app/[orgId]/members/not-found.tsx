export default function NotFound() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex items-center gap-6">
        <div className="text-2xl font-medium leading-none">404</div>
        <div className="bg-border h-16 w-px" />
        <div className="text-xl">その組織は見つかりませんでした</div>
      </div>
    </div>
  );
}
