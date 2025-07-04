/* ---------------------------------------------------------------------------
    HomePage.tsx
    --------------------------------------------------------------------------- */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import {
  ArrowUpRight,
  ChevronLeft,
  Network,
  LayoutGrid,
  ChevronRight,
  Users2,
} from "lucide-react";
import react from "react";

/* ---------------------------------------------------------------------------
    DATA
    --------------------------------------------------------------------------- */
const stats = [
  { icon: <Network size={24} />, value: "20+", label: "Projects" },
  { icon: <LayoutGrid size={24} />, value: "78 MW+", label: "Total Capacity" },
  { icon: <Users2 size={24} />, value: "70+", label: "Employees" },
];

const projectImages = [
  "https://thumbs.dreamstime.com/b/solar-energy-panels-24092598.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZmn7027LcMKSM_VmaDiH1w-XQ6BmdLzjoQ&s",
  "https://thumbs.dreamstime.com/b/solar-energy-panels-24092598.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZmn7027LcMKSM_VmaDiH1w-XQ6BmdLzjoQ&s",
];

const services = [
  {
    title: "Hassle-Free Operation",
    description:
      "You will experience hassle-free operation with proactive, regularly scheduled maintenance to identify, prevent, or promptly resolve potential issues.",
    image: "https://seia.org/wp-content/uploads/2024/08/solar-farm-high-rez.jpg",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize your system’s performance with real-time monitoring, analytics, and expert interventions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYypFlkGn4Low6U9WcUsK0CIRD21n8wo7lKg&s",
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide full technical support, ensuring your solar solution is reliable and up-to-date.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg",
  },
];

const blogs = [
  {
    title: "Renewable Energy Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/28/full/1724835314-5004.jpg?im=FitAndFill=(826,465)",
  },
  {
    title: "Introduction to Solar Energy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3m4ULjD46IrPwN6UiO44Fb7FdqtdwYFQ2A&s",
  },
  {
    title: "Benefits of Solar Energy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/235/998/non_2x/solar-panel-cell-on-dramatic-sunset-sky-background-free-photo.jpg",
  },
];

/* ---------------------------------------------------------------------------
    COMPONENT
    --------------------------------------------------------------------------- */
const HomePage: React.FC = () => {
  /* ------------------------------- carousel ----------------------------- */
  const [activeIndex, setActiveIndex] = useState(0);
  const prevSlide = () =>
    setActiveIndex((p) => (p === 0 ? services.length - 1 : p - 1));
  const nextSlide = () =>
    setActiveIndex((p) => (p === services.length - 1 ? 0 : p + 1));

  /* ------------------------------- refs -------------------------------- */
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  const statsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

  // Ref for the service text content
  const serviceTextRef = useRef<HTMLDivElement>(null);

  /* ------------------------------ GSAP --------------------------------- */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* Hero image: zoom-out on load */
      gsap.from(heroImgRef.current, {
        scale: 1.25,
        duration: 1.6,
        ease: "power3.out",
      });

      /* Hero parallax */
      gsap.to(heroImgRef.current, {
        yPercent: 15,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* Title reveal */
      gsap.from(heroTitleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
      });

      /* Stats */
      gsap.fromTo(
        statsRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      /* Project grid */
      gsap.fromTo(
        projectsRef.current?.children ?? [],
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
          },
        }
      );

      /* Blogs */
      gsap.fromTo(
        blogsRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blogsRef.current,
            start: "top 85%",
          },
        }
      );

      /* Client logos */
      gsap.fromTo(
        clientsRef.current?.children ?? [],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: clientsRef.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  /* Subtle zoom each time the carousel changes ------------------------- */
  useEffect(() => {
    const img = document.getElementById("service-slide-img") as HTMLImageElement;
    if (!img) return;

    // Animate the image zoom
    gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1, ease: "power3.out" });

    // Animate the text content (fade out previous, fade in new)
    if (serviceTextRef.current) {
      gsap.fromTo(
        serviceTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  /* ------------------------------------------------------------------- */
  /* JSX                                                                 */
  /* ------------------------------------------------------------------- */
  return (
    <>
      {/* ---------------------------- HERO ----------------------------- */}
      <div ref={heroRef} className="relative overflow-hidden bg-white">
        <img
          ref={heroImgRef}
          src="https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?semt=ais_hybrid&w=740"
          alt="Solar Panels"
          className="object-cover w-full h-[400px] will-change-transform"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1
          ref={heroTitleRef}
          className="absolute inset-0 flex items-center justify-center mx-auto mt-auto mb-12 text-3xl font-semibold text-white border-b-2 border-white md:text-4xl w-fit will-change-transform"
        >
          Empower&nbsp;Your&nbsp;Organization
        </h1>
      </div>

      {/* ---------------------------- STATS ---------------------------- */}
      <div
        ref={statsRef}
        className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto mt-16 md:grid-cols-3"
      >
        {stats.map(({ icon, value, label }, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center p-6 text-center transition-all duration-300 bg-white border rounded-lg shadow-md group hover:scale-105 hover:shadow-3xl hover:bg-sky-700"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-cyan-800 group-hover:bg-white group-hover:text-cyan-800">
              {icon}
            </div>
            <div className="flex items-center gap-1 text-2xl font-bold text-black group-hover:text-white">
              {value}
              <ArrowUpRight
                size={18}
                className="transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
            <div className="mt-1 text-sm text-black group-hover:text-white">{label}</div>
          </div>
        ))}
      </div>

      {/* --------------------------- PROJECTS -------------------------- */}
      <section className="px-4 py-12 bg-white md:px-8" ref={projectsRef}>
        <h2 className="mb-8 text-3xl font-semibold text-center text-cyan-900">Projects</h2>
        <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto md:grid-cols-4">
          {projectImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded shadow-sm">
              <img
                src={src}
                alt={`Project ${i + 1}`}
                className="object-cover w-full transition-transform duration-300 h-72 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end max-w-6xl mx-auto mt-6">
          <a
            href="/projects"
            className="flex items-center text-sm transition-colors text-black/80 hover:text-cyan-800"
          >
            See All
            <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </section>

      {/* --------------------------- SERVICES -------------------------- */}
      <section className="px-4 py-16 text-center bg-white md:px-8">
        <h2 className="mb-4 text-3xl font-semibold text-cyan-900">Services</h2>
        <p className="mx-auto mb-10 text-xl text-gray-600 max-w-7xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="relative mx-auto max-w-7xl">
          {/* Slide */}
          <div className="relative overflow-hidden shadow-lg rounded-xl">
            <img
              id="service-slide-img"
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="object-cover w-full h-[400px] brightness-75"
            />
            {/* Added ref to the text content div */}
            <div ref={serviceTextRef} className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">{services[activeIndex].title}</h3>
              <p className="max-w-xl px-4 text-sm md:text-base">{services[activeIndex].description}</p>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous service"
              className="absolute p-2 text-black -translate-y-1/2 bg-white rounded-full shadow left-4 top-1/2 hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next service"
              className="absolute p-2 text-black -translate-y-1/2 bg-white rounded-full shadow right-4 top-1/2 hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute flex justify-center w-full gap-2 bottom-4">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  title={`Go to service ${services[idx].title}`}
                  className={`h-3 w-3 rounded-full ${idx === activeIndex ? "bg-white" : "bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 px-2 mt-6 overflow-x-auto">
            {services.map((s, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-300 ${idx === activeIndex ? "border-cyan-600 shadow-lg" : "border-transparent"
                  }`}
              >
                <img src={s.image} alt={s.title} className="object-cover w-40 h-24" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- BLOGS ---------------------------- */}
      <section className="px-4 pt-16 text-white bg-[#003b5c] rounded-lg">
        <div className="pb-10 text-center">
          <h2 className="text-4xl font-semibold">Blogs</h2>
          <h3 className="inline-block pb-1 mt-8 border-b-2 border-white">Recent Blogs</h3>
        </div>

        <div
          ref={blogsRef}
          className="grid max-w-6xl gap-6 px-4 mx-auto mt-10 md:grid-cols-3"
        >
          {blogs.map((b, i) => (
            <div key={i} className="overflow-hidden text-black bg-white rounded-lg shadow-md">
              <img src={b.image} alt={b.title} className="object-cover w-full h-48" />
              <div className="p-4">
                <h4 className="mb-2 text-lg font-semibold">{b.title}</h4>
                <p className="mb-4 text-sm">{b.description}</p>
                <a href="#" className="text-sm font-medium text-blue-600 underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ------------------------- CLIENTS --------------------------- */}
        <section className="py-16 mt-16 text-center bg-[#004e75] px-4">
          <h2 className="mb-4 text-3xl font-semibold">Our Clients</h2>
          <p className="max-w-2xl mx-auto mb-10 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div
            ref={clientsRef}
            className="grid max-w-5xl grid-cols-2 gap-6 mx-auto sm:grid-cols-3 md:grid-cols-5"
          >
            {Array.from({ length: 10 }).map((_, idx) => (
              <div key={idx} className="w-full h-24 bg-gray-300 rounded-lg" />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;

