import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader } from "@/components/portfolio/Loader";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Petals } from "@/components/portfolio/Petals";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Stats } from "@/components/portfolio/Stats";
import { Skills } from "@/components/portfolio/Skills";
import { Gallery } from "@/components/portfolio/Gallery";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rembelle Dilag — Computer Science Student & Builder" },
      { name: "description", content: "Personal portfolio of Rembelle Dilag — computer science student at Cavite State University. A self-portrait in motion." },
      { property: "og:title", content: "Rembelle Dilag — A self portrait, in motion" },
      { property: "og:description", content: "Computer Science student. Quiet builder. Forever curious." },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <CustomCursor />

      <main
        className="relative bg-background text-bone min-h-screen overflow-x-hidden grain-overlay"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}
      >
        <Petals />
        <div className="relative z-10">
          <Nav />
          <Hero />
          <Marquee items={["computer science", "cavite, ph", "builder", "curious", "rembelle dilag", "2026"]} />
          <About />
          <Education />
          <Stats />
          <Skills />
          <div id="gallery">
            <Gallery />
          </div>
          <Contact />
        </div>
      </main>
    </>
  );
}
