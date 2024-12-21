export default function NotFound() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex items-center gap-6">
        <div className="text-2xl font-medium leading-none">404</div>
        <div className="h-16 w-px bg-border" />
        <div className="text-xl">チームが見つかりません</div>
      </div>
    </div>
  );
}
