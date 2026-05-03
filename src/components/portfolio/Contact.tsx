import { motion } from "framer-motion";
import { Section } from "./Section";

const socials = [
  { label: "GitHub",    handle: "@remshura",       href: "https://github.com/remshura",                          k: "GH" },
  { label: "LinkedIn",  handle: "Rembelle Dilag",  href: "https://www.linkedin.com/in/rembelle-dilag-8b93103b0/", k: "IN" },
  { label: "Instagram", handle: "@remshura",       href: "https://www.instagram.com/remshura/",                   k: "IG" },
  { label: "Facebook",  handle: "Boss.Lagdi",      href: "https://www.facebook.com/Boss.Lagdi",                   k: "FB" },
];

export function Contact() {
  return (
    <>
      <Section id="contact" chapter="05" label="Say hello." kanji="言">
        {/* big CTA */}
        <motion.a
          href="tel:+639605905125"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="group relative flex items-center justify-between border-y border-crimson/20 py-10 md:py-16 mb-16 overflow-hidden"
          data-cursor
        >
          <div className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.65,0,0.35,1)]" />
          <span className="relative z-10 font-display italic text-bone group-hover:text-ink text-[clamp(36px,7vw,100px)] leading-none transition-colors duration-300">
            Let's build something
          </span>
          <span className="relative z-10 font-mono text-[clamp(28px,6vw,80px)] text-crimson group-hover:text-ink transition-colors duration-300">
            ↗
          </span>
        </motion.a>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6 space-y-8">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display italic text-bone text-5xl md:text-7xl leading-[0.9]"
            >
              quietly <span className="text-crimson-glow">loud.</span>
            </motion.h3>
            <a
              href="tel:+639605905125"
              className="inline-flex flex-col group"
              data-cursor
            >
              <span className="font-mono text-[10px] uppercase tracking-[.3em] text-crimson mb-1">phone</span>
              <span className="font-display italic text-bone text-3xl md:text-4xl group-hover:text-crimson-glow transition-colors">
                +63 960 590 5125
              </span>
            </a>
          </div>

          <div className="md:col-span-6 space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-[.3em] text-crimson mb-4">/ elsewhere</div>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-baseline justify-between border-b border-bone/10 py-5 group hover:border-crimson hover:px-3 transition-all duration-300 relative overflow-hidden"
                data-cursor
              >
                <div className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]" />
                <div className="relative z-10 flex items-baseline gap-5">
                  <span className="font-mono text-xs text-crimson group-hover:text-bone/50 transition-colors">{s.k}</span>
                  <span className="font-display italic text-bone text-2xl md:text-3xl group-hover:text-crimson-glow transition-colors">
                    {s.label}
                  </span>
                </div>
                <span className="relative z-10 font-mono text-xs text-bone/50 group-hover:text-bone transition-colors">
                  {s.handle} ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* footer */}
      <footer className="relative overflow-hidden">
        {/* big outlined name */}
        <div
          className="text-center select-none pointer-events-none text-stroke leading-[0.8] px-4"
          style={{ fontSize: "clamp(72px, 22vw, 340px)", letterSpacing: "-0.05em" }}
          aria-hidden
        >
          REMBELLE
        </div>

        <div className="border-t border-crimson/20 px-6 md:px-12 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[.3em] text-bone/40">
            <div>© 2026 — Rembelle Dilag. all rights, all wrongs.</div>
            <div>made in cavite, ph · 散華</div>
            <div>end of chapter / 終</div>
          </div>
        </div>
      </footer>
    </>
  );
}
