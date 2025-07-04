// src/components/Navbar.jsx
import React from 'react';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";          // npm i react-icons
import clsx from "clsx";                               // npm i clsx (tiny helper)

/** Change links or add more as needed */
const links = [
  { name: "Home",     href: "#home" },
  { name: "About",    href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Brand / Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold tracking-tight text-indigo-600"
        >
          Solar<span className="text-gray-900">Edge</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
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

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <ul
        className={clsx(
          "flex flex-col gap-4 bg-white px-6 pb-6 md:hidden transition-[max-height] duration-300 ease-in-out",
          open ? "max-h-96" : "max-h-0 overflow-hidden"
        )}
      >
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
      </ul>
    </header>
  );
}
