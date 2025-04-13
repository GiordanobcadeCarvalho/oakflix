"use client";

import Link from "next/link";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export const OakNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-app-background dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between p-4 mx-auto max-w-[1024px]">
        <Link href="/" className="font-bold text-xl text-oakflix-forest">
          Oakflix
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-oakflix-moss"
            aria-label="Explore Movies"
          >
            Explore
          </Link>
          <Link
            href="/about"
            className="hover:text-oakflix-moss"
            aria-label="About Oakflix"
          >
            About
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-oakflix-forest"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden flex flex-col items-center gap-4 pb-4"
          role="menu"
        >
          <Link
            href="/"
            className="w-full text-center text-sm font-semibold py-2 border-b border-neutral-300 dark:border-neutral-700"
            role="menuitem"
            aria-label="Explore Movies"
          >
            Explore
          </Link>
          <Link
            href="/about"
            className="w-full text-center text-sm font-semibold py-2 border-b border-neutral-300 dark:border-neutral-700"
            role="menuitem"
            aria-label="About Oakflix"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};
