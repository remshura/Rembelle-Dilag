import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "REMBELLE".split("");

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let cur = 0;
    const tick = () => {
      cur += Math.random() * 9 + 3;
      if (cur >= 100) {
        cur = 100;
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onDone, 850);
        }, 380);
      } else {
        setProgress(Math.floor(cur));
        setTimeout(tick, 55 + Math.random() * 110);
      }
    };
    const t = setTimeout(tick, 280);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <div className="w-[min(760px,92vw)] space-y-5">
            <div className="font-mono text-[11px] tracking-[.12em] text-bone/40 tabular-nums">
              {String(progress).padStart(3, "0")}
              <span className="text-bone/20">%</span>
            </div>

            <div className="relative h-px bg-border overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-crimson"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.12, ease: "linear" }}
              />
            </div>

            <div className="flex gap-[clamp(1px,0.5vw,6px)]">
              {LETTERS.map((ch, i) => (
                <span key={i} className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.0,
                      delay: 0.06 + i * 0.075,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-display italic text-bone block"
                    style={{ fontSize: "clamp(54px, 11vw, 140px)", lineHeight: 0.88 }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-mono text-[10px] uppercase tracking-[.3em] text-crimson"
            >
              a self portrait, in motion
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
