/* -----------------------------------------------------------------------
   AboutUs.tsx – DMAX “About” page
   Stack  : React 18 • TypeScript • GSAP 3 • Tailwind CSS
   --------------------------------------------------------------------- */

import { useEffect, useRef } from "react";
import React from "react";
import type { ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─────── static assets (swap anytime) ───────────────────────────────── */
const HERO_BG =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80";

const STORY_IMG =
  "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=60";

const MISSION_IMG =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=60";

const VISION_IMG =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=60";

/* ─────── helpers ────────────────────────────────────────────────────── */
const STATS = [
  { end: 250, label: "Global Clients" },
  { end: 18, label: "Years of Excellence" },
  { end: 640, label: "Completed Projects" },
  { end: 96, label: "NPS Score" },
];

const VALUES = [
  { icon: <Shield />, title: "Integrity", text: "We do the right thing—always." },
  { icon: <TrendingUp />, title: "Innovation", text: "Relentless improvement." },
  { icon: <Users />, title: "People-First", text: "Clients & teams alike." },
  { icon: <Award />, title: "Quality", text: "No shortcuts, ever." },
  { icon: <Calendar />, title: "Reliability", text: "On time, every time." },
  { icon: <Target />, title: "Impact", text: "Results that matter." },
];

/* ─────── component ──────────────────────────────────────────────────── */
export default function AboutUs() {
  /* refs – GSAP just needs .current, so direct refs are fine */
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* hero fade-in */
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
      });

      /* staggered reveal */
      [storyRef, missionRef, valuesRef, statsRef].forEach((section) => {
        gsap.from(section.current, {
          scrollTrigger: {
            trigger: section.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
        });
      });

      /* count-up animation on stats */
      gsap.utils.toArray<HTMLDivElement>(".stat").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            const end = Number(el.dataset.end);
            gsap.fromTo(
              el,
              { innerText: 0 },
              {
                innerText: end,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power1.out",
              }
            );
          },
        });
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <main className="text-gray-900 bg-white leading-relaxed">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center h-[60vh] bg-center bg-cover"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white text-center px-4">
          Driving Maximum Impact
        </h1>
      </section>

      {/* ─── STORY ────────────────────────────────────────────── */}
      <section
        ref={storyRef}
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12"
      >
        <img
          src={STORY_IMG}
          alt="Our story"
          className="rounded-lg shadow-lg object-cover h-80 w-full"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="mb-6">
            What started in a single-room garage has evolved into a global
            technology powerhouse. From day one, we believed that bold ideas,
            executed flawlessly, can change industries—and lives.
          </p>
          <p>
            From renewable energy to fintech, our cross-functional teams craft
            solutions that move the world forward. Along the way we’ve learned
            one timeless truth: people and purpose matter most.
          </p>
        </div>
      </section>

      {/* ─── MISSION & VISION ─────────────────────────────────── */}
      <section
        ref={missionRef}
        className="bg-gray-50 py-16 px-6 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p>
            To deliver technology solutions that empower businesses to achieve
            sustainable growth and create positive societal impact.
          </p>
          <img
            src={MISSION_IMG}
            alt="Mission"
            className="rounded-lg shadow-md h-64 w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Our Vision</h3>
          <p>
            A future where innovation and responsibility go hand in hand—where
            every solution we build uplifts communities and the planet.
          </p>
          <img
            src={VISION_IMG}
            alt="Vision"
            className="rounded-lg shadow-md h-64 w-full object-cover"
          />
        </div>
      </section>

      {/* ─── VALUES GRID ──────────────────────────────────────── */}
      <section
        ref={valuesRef}
        className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {VALUES.map(({ icon, title, text }) => (
          <div
            key={title}
            className="flex flex-col items-start gap-4 p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full">
              {icon}
            </div>
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-sm text-gray-600">{text}</p>
          </div>
        ))}
      </section>

      {/* ─── STATS COUNTERS ───────────────────────────────────── */}
      <section
        ref={statsRef}
        className="bg-indigo-600 text-white py-16 px-6 flex flex-wrap justify-center gap-12"
      >
        {STATS.map(({ end, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div
              className="stat text-5xl font-extrabold"
              data-end={end}
            >
              0
            </div>
            <span className="mt-2 text-sm uppercase tracking-wide opacity-80">
              {label}
            </span>
          </div>
        ))}
      </section>

      {/* ─── CALL-TO-ACTION ───────────────────────────────────── */}
      <section className="py-20 px-6 text-center bg-gray-900 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to scale with DMAX?
        </h3>
        <p className="mb-8 max-w-2xl mx-auto">
          Let’s turn your boldest ideas into high-impact products.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium"
        >
          Get in touch
        </a>
      </section>
    </main>
  );
}
