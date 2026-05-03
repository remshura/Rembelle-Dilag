import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
  opacity: number;
};

export function Petals({ count = 18 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 10,
        size: 8 + Math.random() * 18,
        rotate: Math.random() * 360,
        opacity: 0.4 + Math.random() * 0.5,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -60, x: 0, rotate: p.rotate, opacity: 0 }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, 40, -30, 20, 0],
            rotate: [p.rotate, p.rotate + 360],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${p.left}%`, width: p.size, height: p.size * 1.4 }}
          className="absolute"
        >
          <svg viewBox="0 0 20 28" className="h-full w-full">
            <defs>
              <linearGradient id={`pg${p.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.65 0.25 25)" />
                <stop offset="100%" stopColor="oklch(0.35 0.18 22)" />
              </linearGradient>
            </defs>
            <path d="M10 0 C 18 8, 18 20, 10 28 C 2 20, 2 8, 10 0 Z" fill={`url(#pg${p.id})`} />
            <path d="M10 0 L 10 28" stroke="oklch(0.2 0.1 22)" strokeWidth="0.5" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
