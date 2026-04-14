"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/projects", label: "Проекты" },
  { href: "/education", label: "Обучение" },
  { href: "/team", label: "Команда" },
  { href: "/materials", label: "Материалы" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-bg font-display font-bold text-sm">AI</span>
            </div>
            <span className="font-display font-bold text-lg text-text">
              AI Agency
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/partnership"
              className="ml-4 px-5 py-2 text-sm font-semibold bg-accent text-bg rounded-lg hover:bg-accent-hover transition-colors duration-300"
            >
              Партнёрство
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="px-4 pb-4 space-y-1 bg-bg/95 backdrop-blur-lg border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/partnership" onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm font-semibold text-accent">
            Партнёрство
          </Link>
        </nav>
      </div>
    </header>
  );
}
