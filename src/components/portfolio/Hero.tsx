import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/portrait.jpg";

const reveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1.3, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const chip = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 1.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useSpring(useTransform(mx, [-1, 1], [-12, 12]), { stiffness: 80, damping: 30 });
  const ty = useSpring(useTransform(my, [-1, 1], [-8, 8]),   { stiffness: 80, damping: 30 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((e.clientY - rect.top)  / rect.height - 0.5) * 2);
  };
  const onMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 overflow-hidden"
    >
      {/* portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-36 md:w-64 lg:w-88 aspect-[3/4] overflow-hidden border border-crimson/30"
      >
        <img
          src={portrait}
          alt="Rembelle Dilag"
          className="w-full h-full object-cover grayscale-[15%] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[9px] uppercase tracking-widest text-bone/70">
          <span>portrait_01</span>
          <span>35mm</span>
        </div>
      </motion.div>

      {/* kanji */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1.5 }}
        className="absolute left-6 md:left-12 top-1/3 font-display text-crimson/20 text-8xl md:text-[11rem] select-none"
      >
        零
      </motion.div>

      {/* floating chips */}
      <motion.div
        variants={chip}
        initial="hidden"
        animate="show"
        custom={0}
        className="absolute top-[24%] right-[22%] md:right-[28%] font-mono text-[10px] uppercase tracking-[.14em] bg-bone text-ink px-3 py-2 rounded-full flex items-center gap-2 rotate-[8deg]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
        Cavite, PH · Available
      </motion.div>

      <motion.div
        variants={chip}
        initial="hidden"
        animate="show"
        custom={1}
        className="absolute bottom-[32%] left-[4%] md:left-[10%] font-mono text-[10px] uppercase tracking-[.14em] bg-crimson/20 border border-crimson/40 text-bone px-3 py-2 rounded-full rotate-[-5deg] hidden md:flex items-center gap-2"
      >
        ◆ CvSU · CS Student
      </motion.div>

      {/* main title with parallax tilt */}
      <motion.div
        style={{ x: tx, y: ty }}
        className="relative z-10 max-w-7xl"
      >
        <div className="overflow-hidden">
          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={0}
            className="font-display italic font-light text-bone text-[17vw] md:text-[15vw] leading-[0.83] tracking-tight"
          >
            Rembelle
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display font-medium text-stroke text-[17vw] md:text-[15vw] leading-[0.83] tracking-tight -mt-2 md:-mt-5"
          >
            Dilag.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.5 }}
          className="mt-8 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-md">
            <div className="font-mono text-[10px] uppercase tracking-[.3em] text-crimson mb-3">
              ◆ a self portrait, in motion
            </div>
            <p className="font-display italic text-bone/80 text-xl md:text-2xl leading-snug">
              Computer Science student. Quiet builder. Forever curious about the small machines we make and the lives we live around them.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[.3em] text-bone/50 text-right flex flex-col items-end gap-2">
            <span>scroll</span>
            <motion.span
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl text-crimson"
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
