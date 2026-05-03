import { motion } from "framer-motion";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" chapter="02" label="Where I study." kanji="学">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="absolute -top-6 -left-2 font-display italic text-crimson/15 text-[20vw] leading-none select-none pointer-events-none">
          02
        </div>
        <div className="relative grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson mb-3">currently enrolled</div>
            <h3 className="font-display italic text-bone text-4xl md:text-7xl leading-[0.95]">
              Cavite State University
            </h3>
            <h4 className="font-display text-bone/70 text-2xl md:text-3xl mt-2 italic">
              Don Severino Delas Alas Campus
            </h4>
            <div className="mt-6 inline-flex items-center gap-3 border border-crimson/40 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone">
                BS Computer Science
              </span>
            </div>
          </div>
          <div className="md:col-span-4 space-y-2 font-mono text-xs text-bone/60 uppercase tracking-widest">
            <div className="flex justify-between border-b border-bone/10 pb-2"><span>field</span><span className="text-bone">computer science</span></div>
            <div className="flex justify-between border-b border-bone/10 pb-2"><span>campus</span><span className="text-bone">CvSU — DSDAC</span></div>
            <div className="flex justify-between border-b border-bone/10 pb-2"><span>location</span><span className="text-bone">cavite, ph</span></div>
            <div className="flex justify-between border-b border-bone/10 pb-2"><span>status</span><span className="text-crimson">active</span></div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
