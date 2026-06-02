"use client";

import Link from "next/link";
import { useState } from "react";
import { Download } from "lucide-react";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-beige-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-green-primary"
          >
            <span className="text-2xl">🌱</span>
            <span>Warzywnik</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-graphite-mid hover:text-green-primary transition-colors"
            >
              Funkcje
            </Link>
            <Link
              href="/#audience"
              className="text-sm font-medium text-graphite-mid hover:text-green-primary transition-colors"
            >
              Dla kogo
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-graphite-mid hover:text-green-primary transition-colors"
            >
              Prywatność
            </Link>
          </nav>

          {/* CTA button */}
          <div className="hidden md:block">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-mid transition-colors"
            >
              <Download className="w-4 h-4" />
              Pobierz aplikację
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-graphite-mid hover:bg-green-pale transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Otwórz menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-beige-dark flex flex-col gap-4">
            <Link
              href="/#features"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-graphite-mid hover:text-green-primary transition-colors"
            >
              Funkcje
            </Link>
            <Link
              href="/#audience"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-graphite-mid hover:text-green-primary transition-colors"
            >
              Dla kogo
            </Link>
            <Link
              href="/privacy-policy"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-graphite-mid hover:text-green-primary transition-colors"
            >
              Prywatność
            </Link>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-primary text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-green-mid transition-colors"
            >
              <Download className="w-4 h-4" />
              Pobierz aplikację
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
