export default function NotFound() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex items-center gap-6">
        <div className="text-2xl leading-none font-medium">404</div>
        <div className="bg-border h-16 w-px" />
        <div className="text-xl">チームが見つかりません</div>
      </div>
    </div>
  );
}
