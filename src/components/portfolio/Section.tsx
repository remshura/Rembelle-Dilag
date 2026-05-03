import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  chapter,
  label,
  kanji,
  children,
}: {
  id: string;
  chapter: string;
  label: string;
  kanji?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 md:px-12 py-24 md:py-40 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="flex items-baseline justify-between mb-12 md:mb-20 border-b border-crimson/20 pb-6"
      >
        <div className="flex items-baseline gap-6">
          {kanji && <span className="font-display text-crimson text-3xl md:text-5xl">{kanji}</span>}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson mb-1">chapter {chapter}</div>
            <h2 className="font-display italic text-bone text-4xl md:text-6xl">{label}</h2>
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 hidden md:block">
          {chapter} / 05
        </div>
      </motion.div>
      {children}
    </section>
  );
}
