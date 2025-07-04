// src/components/Footer.jsx
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";          // npm i react-icons
import React from "react";

export default function Footer() {
  /* Every social item now has a unique id */
  const socials = [
    { id: "fb", Icon: FaFacebookF, href: "#" },
    { id: "tw", Icon: FaTwitter,    href: "#" },
    { id: "ln", Icon: FaLinkedinIn, href: "#" },
    { id: "yt", Icon: FaYoutube,    href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* ─── Top section ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="text-2xl font-extrabold text-indigo-500">
              Solar<span className="text-white">Edge</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Powering homes &amp; businesses with clean, affordable solar
              solutions across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="transition hover:text-indigo-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Maintenance",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="transition hover:text-indigo-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <p className="text-sm">
              123&nbsp;Renewable&nbsp;Way<br />
              Ahmedabad&nbsp;382&nbsp;421
            </p>
            <p className="mt-2 text-sm">
              <a
                href="tel:+91-98765-43210"
                className="transition hover:text-indigo-400"
              >
                +91&nbsp;98765&nbsp;43210
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href="mailto:info@solaredge.com"
                className="transition hover:text-indigo-400"
              >
                info@solaredge.com
              </a>
            </p>

            {/* Social icons */}
            <div className="mt-4 flex gap-4">
              {socials.map(({ id, Icon, href }) => (
                <a
                  key={id}                       /* ✅ unique key */
                  href={href}
                  aria-label={id}
                  className="rounded-full bg-gray-800 p-2 transition hover:bg-indigo-500"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom bar ─────────────────────────────────────────── */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} SolarEdge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
