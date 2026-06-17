import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      hardwareConcurrency?: number;
    };
    const lowEnd =
      (!!nav.deviceMemory && nav.deviceMemory <= 4) ||
      (!!nav.hardwareConcurrency && nav.hardwareConcurrency <= 4);
    if (!reduce && !lowEnd) document.body.classList.add("fx");

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if ("IntersectionObserver" in window && !reduce) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            const sec = el.closest("section, header") || document.body;
            const group = Array.from(sec.querySelectorAll(".reveal"));
            const i = group.indexOf(el);
            el.style.transitionDelay = (i > 0 ? Math.min(i, 6) * 70 : 0) + "ms";
            el.classList.add("in");
            io.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
    els.forEach((el) => el.classList.add("in"));
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
