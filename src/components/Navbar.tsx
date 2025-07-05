// src/components/Navbar.jsx
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";   // →  npm i react-icons
import React from "react";

// Edit or extend as you like
const links = [
  // { name: "Home",     href: "#home" },
  { name: "About",    href: "#" },
   { name: "Project",    href: "#projects" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      {/* Outer wrapper centres the 3-column grid and adds padding */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid makes it easy to keep middle content truly centred */}
        <div className="relative grid grid-cols-3 items-center py-4">
          {/* — Left: logo — */}
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight text-indigo-600"
          >
            Solar<span className="text-gray-900">Edge</span>
          </a>

          {/* — Centre: links (desktop only) — */}
          <ul className="hidden justify-center gap-8 md:flex">
            {links.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* — Right: CTA button (desktop) or hamburger (mobile) — */}
          <div className="flex justify-end">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 md:inline-block"
            >
              Contact&nbsp;Us
            </a>

            {/* Mobile hamburger */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <ul className="space-y-4 bg-white px-6 pb-6 md:hidden">
            {links.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="block text-base font-medium text-gray-700 transition hover:text-indigo-600"
                  onClick={() => setOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block rounded-md bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white shadow hover:bg-indigo-500"
                onClick={() => setOpen(false)}
              >
                Contact&nbsp;Us
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
