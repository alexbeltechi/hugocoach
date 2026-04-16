"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">H</span>
          </div>
          <span className="text-lg font-semibold text-dark">Hugo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray transition-colors hover:text-dark"
          >
            Homepage
          </Link>

          <Link
            href="/coaching#individual"
            className="text-sm font-medium text-gray transition-colors hover:text-dark"
          >
            Coaching
          </Link>

          <Link
            href="/coaching#team"
            className="text-sm font-medium text-gray transition-colors hover:text-dark"
          >
            Team
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray transition-colors hover:text-dark"
          >
            About Me
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-dark px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dark/90 md:block"
        >
          BOOK A CALL
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-dark transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-dark transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-dark transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-light bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray transition-colors hover:text-dark"
            >
              Homepage
            </Link>
            <Link
              href="/coaching#individual"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray transition-colors hover:text-dark"
            >
              Coaching
            </Link>
            <Link
              href="/coaching#team"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray transition-colors hover:text-dark"
            >
              Team
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray transition-colors hover:text-dark"
            >
              About Me
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-dark px-6 py-2.5 text-center text-sm font-semibold text-white"
            >
              BOOK A CALL
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}



