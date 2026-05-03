import { motion } from "framer-motion";
import { Section } from "./Section";

const rows = [
  { num: "01", name: "Frontend",          tags: "HTML · CSS · JavaScript · React · Tailwind"  },
  { num: "02", name: "Backend",           tags: "Node.js · Express · MySQL · MongoDB · PHP"    },
  { num: "03", name: "Languages",         tags: "JavaScript · TypeScript · Python · Java · C++" },
  { num: "04", name: "Design & UI",       tags: "Figma · Tailwind · Motion · Detail"            },
  { num: "05", name: "Tools",             tags: "Git · GitHub · VS Code · Linux"                },
  { num: "06", name: "Currently learning", tags: "Three.js · Cloud · AI / ML basics"            },
];

export function Skills() {
  return (
    <Section id="skills" chapter="03" label="The craft." kanji="技">
      <ul className="divide-y divide-bone/10">
        {rows.map((r, i) => (
          <motion.li
            key={r.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.07 }}
            className="group relative overflow-hidden"
          >
            {/* fill layer */}
            <div className="absolute inset-0 bg-bone translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />

            <div className="relative z-10 flex items-center gap-4 md:gap-8 px-2 md:px-4 py-6 md:py-8 group-hover:px-6 transition-[padding] duration-500">
              <span className="font-mono text-xs text-crimson group-hover:text-ember transition-colors w-8 shrink-0">
                {r.num}
              </span>
              <span className="font-display italic text-bone group-hover:text-ink text-2xl md:text-[clamp(28px,4vw,52px)] leading-none transition-colors flex-1">
                {r.name}
              </span>
              <span className="hidden md:block font-mono text-xs text-bone/50 group-hover:text-ink/60 transition-colors tracking-wide">
                {r.tags}
              </span>
              <span className="ml-auto font-mono text-base text-bone/30 group-hover:text-ink/60 translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
                →
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
