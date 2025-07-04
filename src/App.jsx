import Navbar from "./Navbar";
import React from 'react';

export default function App() {
  return (
    <>
      <Navbar />

      {/* Hero section (example) */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 text-center"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Powering the Future with Clean Energy
        </h1>
      </section>

      {/* Dummy sections to show scrolling */}
      <section id="about" className="h-screen bg-white">…</section>
      <section id="services" className="h-screen bg-gray-50">…</section>
      <section id="contact" className="h-screen bg-white">…</section>
    </>
  );
}
