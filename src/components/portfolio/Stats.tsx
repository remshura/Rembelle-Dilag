import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: 2026, suffix: "",  label: "The year, right now",    raw: true  },
  { num: 100,  suffix: "+", label: "Late-night commits"                  },
  { num: 12,   suffix: "",  label: "Tech stacks tried"                   },
  { num: 1,    suffix: "",  label: "Cup of coffee · always"              },
];

function Counter({ target, suffix, raw }: { target: number; suffix: string; raw?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.floor(ease * target));
      if (t < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {raw ? val : val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <div className="border-y border-crimson/20 grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="group relative px-8 py-14 border-r border-crimson/20 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(2)]:border-crimson/20 overflow-hidden cursor-default"
        >
          {/* fill on hover */}
          <div className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />

          <div className="relative z-10">
            <div className="font-display italic text-bone text-[clamp(52px,9vw,110px)] leading-none group-hover:text-ink transition-colors duration-300">
              <Counter target={s.num} suffix={s.suffix} raw={s.raw} />
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[.25em] text-bone/50 group-hover:text-ink/70 transition-colors duration-300">
              {s.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
