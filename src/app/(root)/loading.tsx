export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600 border-opacity-30"></div>
      <p className="text-muted-foreground">Bringing nature to your screen...</p>
    </div>
  );
}
