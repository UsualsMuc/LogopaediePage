"use client";

import { useState } from "react";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(248,244,238,0.82)] backdrop-blur">
      <div className="relative mx-auto flex w-full max-w-[88rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <a href="#top" className="font-display text-3xl text-foreground">
          Novaro
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-6 text-sm font-semibold text-muted md:flex">
          <a href="#funktioniert">Wie es funktioniert</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#kontakt"
            className="hidden md:inline-flex rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c15b29]"
          >
            Anfragen
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="left-0 right-0 top-full border-t border-line bg-[rgba(248,244,238,0.96)] px-4 py-4 shadow-lg md:absolute">
          <nav className="flex flex-col gap-4 text-base font-semibold text-foreground">
            <a href="#funktioniert" onClick={() => setIsOpen(false)}>
              Wie es funktioniert
            </a>
            <a href="#kontakt" onClick={() => setIsOpen(false)}>
              Kontakt
            </a>
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-full justify-center rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c15b29]"
            >
              Anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
