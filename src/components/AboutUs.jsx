// src/pages/AboutUs.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  /* ---------- simple fade-in for the image grid ---------- */
  const imagesGridRef = useRef(null);
  useEffect(() => {
    if (!imagesGridRef.current) return;
    gsap.fromTo(
      imagesGridRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesGridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  /* ------------------------------------------------------- */

  return (
    <>
      {/* ---------- HERO ---------- */}
      <div className="text-gray-900 bg-white">
        <header
          className="relative flex h-[300px] flex-col items-center justify-center bg-cover bg-center text-white"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?w=1060')",
          }}
        >
          <h1 className="mb-2 border-b-2 border-white px-4 text-4xl font-bold">
            About&nbsp;Us
          </h1>
          <p className="max-w-xl px-4 text-center text-base md:text-lg">
            From concept to completion, we work closely with you every step of
            the way to ensure complete satisfaction.
          </p>
        </header>

        {/* ---------- OUR STORY ---------- */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-12">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#004e75]">
            Our Story
          </h2>

          <div className="grid gap-10 text-justify leading-relaxed md:grid-cols-2">
            <p>
              <span className="font-semibold text-[#004e75]">
                DMAX REINFRA LLP
              </span>{" "}
              was established on 15&nbsp;July 2020 with a clear mission: to
              accelerate the shift toward renewable energy and make sustainable
              solutions accessible to all. From the outset, we recognised the
              need for a comprehensive approach—managing everything from land
              acquisition to final commissioning.
            </p>

            <p>
              Those early projects laid the foundation for our growth,
              demonstrating our ability to deliver complex renewable solutions.
              As demand for clean energy grew, so did our expertise in&nbsp;
              <a
                href="#"
                className="text-blue-600 underline transition-colors hover:text-blue-800"
              >
                turnkey solutions
              </a>{" "}
              and&nbsp;
              <a
                href="#"
                className="text-blue-600 underline transition-colors hover:text-blue-800"
              >
                EPC services
              </a>
              , allowing us to meet the evolving needs of businesses and
              communities while driving sustainability and innovation forward.
            </p>
          </div>
        </section>
      </div>

      {/* ---------- IMAGE GRID ---------- */}
      <div ref={imagesGridRef} className="mx-auto max-w-7xl">
        <div className="flex flex-wrap -mx-3 px-3 mb-8">
          {/* left column */}
          <div className="mb-6 w-full pe-3 lg:mb-0 lg:w-1/2">
            <img
              src="https://t3.ftcdn.net/jpg/06/58/93/12/360_F_658931267_W9QK8mbF8NvK8MrXrkek4MYE8Lr1RixM.jpg"
              alt="Ground-mount array"
              className="h-64 w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 md:h-80"
            />
            <div className="mt-6 flex space-x-6">
              {["Substation", "Aerial view"].map((alt) => (
                <img
                  key={alt}
                  src="https://t3.ftcdn.net/jpg/06/58/93/12/360_F_658931267_W9QK8mbF8NvK8MrXrkek4MYE8Lr1RixM.jpg"
                  alt={alt}
                  className="flex-1 h-40 cursor-pointer rounded-lg object-cover transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* right column */}
          <div className="w-full space-y-6 ps-3 lg:w-1/2">
            <img
              src="https://novasysgreen.com/assets/images/home/blog-img2.webp"
              alt="Installation crew"
              className="h-64 w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 md:h-48"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnjid9ZZ8KcZkmfgidj_mA1NmxJxI6YL66w&s"
              alt="Control room"
              className="h-64 w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 md:h-72"
            />
          </div>
        </div>
      </div>

      {/* ---------- ADDITIONAL TEXT ---------- */}
      <div className="mx-auto max-w-7xl text-base leading-relaxed text-gray-800 md:text-lg">
        <p>
          We’ve forged strong partnerships with industry leaders and leveraged
          the latest technologies to deliver high-quality energy projects. Our
          expanding portfolio is designed with sustainability at its core. Today
          we remain committed to driving the energy revolution—helping clients
          achieve their renewable goals for a cleaner, greener future.
        </p>
      </div>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="mx-auto max-w-7xl space-y-10 py-16 bg-white">
        {/* Mission */}
        {/* <figure className="relative h-[300px] overflow-hidden rounded-xl md:h-[360px]">
          <img
            src="https://media.istockphoto.com/id/1455358887/photo/aerial-view-of-large-electrical-power-plant-with-many-rows-of-solar-photovoltaic-panels-for.jpg"
            alt="Mission"
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute inset-0 flex flex-col justify-center bg-black/50 px-6 text-white md:px-12">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Our&nbsp;Mission
            </h2>
            <p className="max-w-2xl text-sm md:text-base">
              To harness the power of the sun and deliver efficient,
              high-performance solar solutions—empowering businesses and
              communities to embrace a cleaner, greener future.
            </p>
          </figcaption>
        </figure> */}

        {/* Vision */}
        <figure className="relative h-[300px] overflow-hidden rounded-xl md:h-[360px]">
          <img
            src="https://earth.org/wp-content/uploads/2022/02/Untitled-design-2022-02-10T124016.253.jpg"
            alt="Vision"
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute inset-0 flex flex-col items-end justify-center bg-black/50 px-6 text-right text-white md:px-12">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Our&nbsp;Vision
            </h2>
            <p className="max-w-2xl text-sm md:text-base">
              We envision a world where renewable energy underpins progress—
              making solar power accessible, efficient, and transformative for
              everyone.
            </p>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
