export function Marquee({ items }: { items: string[] }) {
  const all = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-crimson/20 bg-ink py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <span key={i} className="font-display italic text-5xl md:text-7xl text-bone/90 px-8 flex items-center gap-8">
            {t}
            <span className="text-crimson text-2xl">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
