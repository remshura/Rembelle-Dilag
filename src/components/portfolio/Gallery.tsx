import { motion } from "framer-motion";

const photos = [
  {
    src: "/photos/photo-1.png",
    alt: "Rembelle · late-night setup",
    caption: "Late nights · Photo Booth",
    num: "01",
    rotate: "-1.5deg",
    delay: 0,
  },
  {
    src: "/photos/photo-2.png",
    alt: "Rembelle · mirror selfie",
    caption: "Setup · Spotify on repeat",
    num: "02",
    rotate: "1.2deg",
    delay: 0.08,
  },
  {
    src: "/photos/photo-3.png",
    alt: "Rembelle · on the road",
    caption: "On the road",
    num: "03",
    rotate: "-0.8deg",
    delay: 0.16,
  },
  {
    src: "/photos/photo-4.png",
    alt: "Rembelle · casual",
    caption: "Casual day",
    num: "04",
    rotate: "2deg",
    delay: 0.24,
  },
];

export function Gallery() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-36 max-w-7xl mx-auto">
      {/* section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-baseline gap-6 border-b border-crimson/20 pb-6 mb-16 md:mb-24 justify-between"
      >
        <div className="flex items-baseline gap-6">
          <span className="font-display text-crimson text-3xl md:text-5xl">映</span>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[.3em] text-crimson mb-1">chapter 01.5</div>
            <h2 className="font-display italic text-bone text-4xl md:text-6xl">Moments.</h2>
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[.3em] text-bone/40 hidden md:block">
          01.5 / 05
        </div>
      </motion.div>

      {/* scattered grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start">
        {photos.map((p, i) => (
          <motion.figure
            key={p.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, y: -8, transition: { duration: 0.5 } }}
            style={{ rotate: p.rotate, marginTop: i % 2 === 1 ? "clamp(16px, 4vw, 48px)" : 0 }}
            className="relative overflow-hidden border border-bone/10 hover:border-crimson/50 transition-colors cursor-pointer group"
            data-cursor
          >
            <div className="aspect-[3/4] overflow-hidden bg-ink">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[15%] brightness-95 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* caption bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent px-3 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <div className="flex justify-between items-end font-mono text-[9px] uppercase tracking-widest text-bone/90">
                <span>{p.caption}</span>
                <span className="text-crimson">{p.num}</span>
              </div>
            </div>
          </motion.figure>
        ))}
      </div>

      {/* bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-14 md:mt-20 font-display italic text-bone/50 text-xl md:text-2xl text-right"
      >
        Different days, same person trying to figure it out.
        <span className="block font-mono not-italic text-[10px] uppercase tracking-[.3em] text-crimson mt-2 text-right">
          2024 — 2026 · Cavite, PH
        </span>
      </motion.p>
    </section>
  );
}
