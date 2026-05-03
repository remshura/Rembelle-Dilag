import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CustomCursor() {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const hovered = useMotionValue(0);
  const pressed = useMotionValue(0);

  const ringX = useSpring(mx, { stiffness: 130, damping: 22, mass: 0.7 });
  const ringY = useSpring(my, { stiffness: 130, damping: 22, mass: 0.7 });
  const hoverSpring = useSpring(hovered, { stiffness: 250, damping: 22 });
  const pressSpring = useSpring(pressed, { stiffness: 400, damping: 24 });

  const ringSize = useTransform(
    [hoverSpring, pressSpring] as any,
    ([h, p]: number[]) => 28 + h * 38 - p * 10,
  );

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const onMove = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    const onDown = () => pressed.set(1);
    const onUp   = () => pressed.set(0);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const enter = () => hovered.set(1);
    const leave = () => hovered.set(0);

    const wire = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };
    wire();
    const obs = new MutationObserver(wire);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      obs.disconnect();
    };
  }, [mx, my, hovered, pressed]);

  return (
    <div className="pointer-events-none select-none" aria-hidden>
      {/* Spring-lagged ring */}
      <motion.div
        className="fixed top-0 left-0 z-[998] rounded-full border border-bone mix-blend-difference hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: ringSize,
          height: ringSize,
        }}
      />
      {/* Instant dot */}
      <motion.div
        className="fixed top-0 left-0 z-[999] w-[5px] h-[5px] rounded-full bg-crimson mix-blend-difference hidden md:block"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
