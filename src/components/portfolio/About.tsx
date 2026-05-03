import { motion } from "framer-motion";
import { Section } from "./Section";

const traits = [
  { k: "01", v: "Curious by default" },
  { k: "02", v: "Builds quietly, ships often" },
  { k: "03", v: "Loves clean code, cleaner ideas" },
  { k: "04", v: "Filipino, Cavite-based" },
  { k: "05", v: "Coffee + late nights" },
];

export function About() {
  return (
    <Section id="about" chapter="01" label="About me." kanji="我">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-7 space-y-6">
          <p className="font-display italic text-bone text-3xl md:text-5xl leading-tight">
            I'm <span className="text-crimson-glow">Rembelle Dilag</span> — a computer science student who treats every line of code like a small, deliberate sentence.
          </p>
          <p className="text-bone/70 text-base md:text-lg leading-relaxed max-w-xl">
            I grew up taking things apart to see how they worked. Now I build them. Software, ideas, little weekend experiments. I care about how things feel as much as how they function — the spacing, the silence, the small details nobody asked for but everybody notices.
          </p>
          <p className="text-bone/70 text-base md:text-lg leading-relaxed max-w-xl">
            This site is a portrait. Not a résumé. Stay a while.
          </p>
        </div>
        <div className="md:col-span-5 space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson mb-4">/ traits</div>
          {traits.map((t, i) => (
            <motion.div
              key={t.k}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="flex items-baseline gap-4 border-b border-bone/10 py-3 group hover:border-crimson transition-colors"
            >
              <span className="font-mono text-xs text-crimson">{t.k}</span>
              <span className="font-display italic text-bone text-xl md:text-2xl group-hover:text-crimson-glow transition-colors">
                {t.v}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
