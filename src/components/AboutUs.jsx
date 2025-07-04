// src/pages/AboutUs.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaSolarPanel,
  FaLeaf,
  FaGlobe,
  FaUsers,
  FaRegLightbulb,
  FaHandshake,
} from "react-icons/fa";
import React from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  // We'll push every <section> ref into this array for a simple fade-in
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );
    });
  }, []);

  // Helper to assign refs in the JSX below
  const pushRef = (el) => el && !sectionsRef.current.includes(el) && sectionsRef.current.push(el);

  return (
    <>
      {/* --- Hero --- */}
      <header
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-extrabold md:text-6xl">About&nbsp;Us</h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl">
            Powering the planet with clean, affordable solar energy—one rooftop
            at a time.
          </p>
        </div>
      </header>

      {/* --- Our Story --- */}
      <section ref={pushRef} className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1581090694729-934cb6b6fc21?auto=format&fit=crop&w=900&q=60"
            alt="Solar installation"
            className="h-72 w-full rounded-lg object-cover md:h-auto"
          />
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-gray-600">
              Founded in 2016, SolarEdge began with a simple idea: harness the
              sun’s limitless power to build a cleaner future. From a two-person
              garage start-up we’ve grown into a global team, delivering
              residential and commercial solar solutions on four continents.
              <br />
              <br />
              Today we manage **500 MW+** of installed capacity and have helped
              over **12 000** families and businesses slash their carbon
              footprints.
            </p>
          </div>
        </div>
      </section>

      {/* --- Mission & Vision cards --- */}
      <section ref={pushRef} className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2">
          {[
            {
              title: "Our Mission",
              text: "To make clean energy the first choice for every home & business through innovative, affordable solar technology.",
              Icon: FaRegLightbulb,
            },
            {
              title: "Our Vision",
              text: "A world where sustainable power is accessible to all, reducing carbon emissions and inspiring energy independence.",
              Icon: FaGlobe,
            },
          ].map(({ title, text, Icon }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg"
            >
              <Icon className="mb-4 h-8 w-8 text-indigo-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Core Values --- */}
      <section ref={pushRef} className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          Our Core Values
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Sustainability", Icon: FaLeaf },
            { name: "Innovation", Icon: FaSolarPanel },
            { name: "Integrity", Icon: FaHandshake },
            { name: "Customer Focus", Icon: FaUsers },
            { name: "Global Impact", Icon: FaGlobe },
            { name: "Collaboration", Icon: FaRegLightbulb },
          ].map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow transition hover:bg-gray-100"
            >
              <Icon className="mb-3 h-8 w-8 text-indigo-600" />
              <h4 className="font-medium text-gray-800">{name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* --- Stats bar --- */}
      <section ref={pushRef} className="bg-indigo-600 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
          {[
            { value: "500 MW+", label: "Capacity Installed" },
            { value: "12 000+", label: "Projects Completed" },
            { value: "4", label: "Continents Served" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-extrabold md:text-4xl">{value}</p>
              <p className="mt-1 text-sm uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Team (optional avatars) --- */}
      <section ref={pushRef} className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          Meet the Leadership
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Riya Patel", role: "CEO" },
            { name: "Arjun Mehta", role: "CTO" },
            { name: "Sarah Khan", role: "COO" },
            { name: "Dinesh Rao", role: "Head of Engineering" },
          ].map(({ name, role }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center"
            >
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  name
                )}&background=4f46e5&color=fff&size=128`}
                alt={name}
                className="mb-4 h-32 w-32 rounded-full object-cover shadow-lg"
              />
              <h4 className="font-semibold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
