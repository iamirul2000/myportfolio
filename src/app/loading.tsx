export default function Loading() {
  return (
    <div className="container py-24">
      <div className="animate-pulse space-y-6">
        <div className="h-6 w-32 rounded-full bg-muted" />
        <div className="h-16 max-w-2xl rounded-3xl bg-muted" />
        <div className="grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-80 rounded-[2rem] bg-muted" />
          ))}
        </div>
      </div>
    </div>
  );
}
