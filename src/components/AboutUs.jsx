/* -------------------------------------------------
   AboutUs.jsx – DMAX “About” page v3
   Dependencies: react, gsap, @gsap/ScrollTrigger, lucide-react
   ------------------------------------------------- */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from 'react';
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* — static assets (replace anytime) — */
const HERO_BG =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80";

const STORY_IMG =
  "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=60";

const MISSION_IMG =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=60";

const VISION_IMG =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60";

const VALUES_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=60";

const STATS = [
  { count: 12, suffix: "+ yrs", label: "Industry Experience" },
  { count: 28, suffix: "+", label: "Global Markets Served" },
  { count: 150, suffix: " K+", label: "Customers Empowered" },
  { count: 99.97, suffix: "%", label: "Uptime SLA" },
];

const VALUES = [
  { icon: <Shield className="h-6 w-6" />, title: "Integrity" },
  { icon: <TrendingUp className="h-6 w-6" />, title: "Innovation" },
  { icon: <Users className="h-6 w-6" />, title: "Customer-First" },
  { icon: <Award className="h-6 w-6" />, title: "Excellence" },
];

export default function AboutUs() {
  /* refs */
  const heroRef = useRef(null);
  const storyImg = useRef(null);
  const missionImg = useRef(null);
  const visionImg = useRef(null);
  const valuesImg = useRef(null);
  const counterRefs = useRef([]);

  const addCounter = (el) => {
    if (el && !counterRefs.current.includes(el)) counterRefs.current.push(el);
  };

  /* gsap timeline setup */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* hero parallax */
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* image slide-ins */
      [
        { el: storyImg.current, fromX: -80 },
        { el: missionImg.current, fromX: 80 },
        { el: visionImg.current, fromX: -80 },
        { el: valuesImg.current, fromY: 60 },
      ].forEach(({ el, fromX = 0, fromY = 0 }) =>
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: fromX, y: fromY },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        )
      );

      /* animated counters */
      counterRefs.current.forEach((el, i) => {
        const { count, suffix } = STATS[i];
        const obj = { val: 0 };
        gsap.to(obj, {
          val: count,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent =
              count % 1 === 0 ? Math.floor(obj.val) + suffix : obj.val.toFixed(2) + suffix;
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-gray-800 bg-white leading-relaxed">
      {/* — HERO — */}
      <header
        ref={heroRef}
        style={{ backgroundImage: `url(${HERO_BG})` }}
        className="relative flex items-center justify-center h-[60vh] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">Discover DMAX</h1>
          <p className="mx-auto max-w-xl text-lg md:text-xl">
            Powering possibilities through next-gen digital solutions.
          </p>
        </div>
      </header>

      {/* — OUR STORY — */}
      <section className="grid items-center gap-10 py-16 px-6 md:px-12 lg:grid-cols-2">
        <img
          ref={storyImg}
          src={STORY_IMG}
          alt="DMAX team collaboration"
          className="rounded-3xl shadow-lg"
        />
        <div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>
          <p>
            Founded in 2013, DMAX began with a simple idea: leverage technology to remove
            friction from everyday business. Over the years we’ve grown into a global
            enabler for enterprises seeking resilience, scalability, and unmatched
            performance.
          </p>
        </div>
      </section>

      {/* — MISSION — */}
      <section className="grid items-center gap-10 py-16 px-6 bg-gray-50 md:px-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold">
            <Target className="h-6 w-6 text-indigo-600" /> Our Mission
          </h3>
          <p>
            To democratize advanced digital infrastructure, empowering every organization —
            big or small — to create value faster while reducing their carbon footprint.
          </p>
        </div>
        <img
          ref={missionImg}
          src={MISSION_IMG}
          alt="High-tech mission"
          className="order-1 lg:order-2 rounded-3xl shadow-lg"
        />
      </section>

      {/* — VISION — */}
      <section className="grid items-center gap-10 py-16 px-6 md:px-12 lg:grid-cols-2">
        <img
          ref={visionImg}
          src={VISION_IMG}
          alt="Visionary sunrise"
          className="rounded-3xl shadow-lg"
        />
        <div>
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold">
            <Calendar className="h-6 w-6 text-indigo-600" /> Our Vision
          </h3>
          <p>
            A connected world in which seamless, sustainable technology unlocks human
            potential and drives progress for generations to come.
          </p>
        </div>
      </section>

      {/* — STATS — */}
      <section
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
        className="relative py-20 text-center bg-gray-100"
      >
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">At a Glance</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map(({ suffix, label },) => (
            <div key={label}>
              <p ref={addCounter} className="mb-1 text-4xl font-extrabold text-indigo-600">
                0{suffix}
              </p>
              <p className="text-sm uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* — VALUES — */}
      <section className="py-16 px-6 text-center bg-gray-50 md:px-12">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Our Values</h2>
        <img
          ref={valuesImg}
          src={VALUES_IMG}
          alt="Teamwork illustration"
          className="mx-auto mb-12 max-w-xl rounded-3xl shadow-lg"
        />
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon, title }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <div className="mb-4 text-indigo-600">{icon}</div>
              <h4 className="font-semibold">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* — CTA — */}
      <section className="relative bg-indigo-600 py-20 px-6 text-center text-white md:px-12">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Ready to maximize with DMAX?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl">
          Join thousands of innovators scaling faster and operating smarter on our platform.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50 active:scale-95"
        >
          Talk to an Expert
        </a>
        {/* angled overlay for flair */}
        <div className="pointer-events-none absolute inset-0 rotate-2 bg-gradient-to-tr from-white/10 to-white/5" />
      </section>
    </div>
  );
}
