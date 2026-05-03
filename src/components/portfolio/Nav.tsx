import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const chapters = [
  { id: "about",     num: "01", label: "entering" },
  { id: "education", num: "02", label: "study"     },
  { id: "skills",    num: "03", label: "craft"     },
  { id: "gallery",   num: "04", label: "moments"   },
  { id: "contact",   num: "05", label: "say hello" },
];

function getActiveChapter(): string {
  for (const ch of [...chapters].reverse()) {
    const el = document.getElementById(ch.id);
    if (el && el.getBoundingClientRect().top < window.innerHeight * 0.55) {
      return ch.num;
    }
  }
  return "00";
}

export function Nav() {
  const { scrollY } = useScroll();
  const [chapter, setChapter] = useState("00");
  const [label, setLabel] = useState("entering");

  useMotionValueEvent(scrollY, "change", () => {
    const num = getActiveChapter();
    setChapter(num);
    const found = chapters.find((c) => c.num === num);
    setLabel(found?.label ?? "entering");
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl text-bone italic">R</span>
          <div className="font-mono text-[10px] uppercase tracking-[.3em] text-bone/70">
            <div>chapter</div>
            <motion.div
              key={chapter}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {chapter} / {label}
            </motion.div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 font-mono text-[11px] uppercase tracking-[.25em] text-bone/80">
          <a href="#about"     className="hover:text-crimson-glow transition-colors">about</a>
          <a href="#education" className="hover:text-crimson-glow transition-colors">study</a>
          <a href="#skills"    className="hover:text-crimson-glow transition-colors">craft</a>
          <a href="#gallery"   className="hover:text-crimson-glow transition-colors">moments</a>
          <a href="#contact"   className="hover:text-crimson-glow transition-colors">contact</a>
        </nav>

        <div className="font-mono text-[10px] uppercase tracking-[.3em] text-bone/70 text-right">
          <div className="flex items-center gap-2 justify-end">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
            BUILD M.26
          </div>
          <div>REMBELLE / 2026</div>
        </div>
      </div>
    </motion.header>
  );
}
