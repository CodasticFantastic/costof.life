export default function AppColors() {
  const colors = [
    "background",
    "foreground",
    "muted",
    "border",
    "card",
    "card-muted",
    "primary",
    "primary-hover",
    "secondary",
    "accent",
    "success",
    "error",
    "warning",
  ];
  return (
    <main>
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] p-8">
        <h1 className="text-3xl font-bold mb-6">Podgląd kolorów costof.life</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((name) => (
            <div
              key={name}
              className="rounded-xl shadow-md border border-[var(--color-border)] overflow-hidden"
            >
              <div
                style={{ backgroundColor: `var(--color-${name})` }}
                className="h-32 w-full flex items-center justify-center"
              >
                <span className="text-sm font-mono bg-[var(--color-card)] px-2 py-1 rounded">
                  --color-{name}
                </span>
              </div>
              <div className="p-4 bg-[var(--color-card-muted)] text-[var(--color-muted)] text-sm">
                Przykład koloru: {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
