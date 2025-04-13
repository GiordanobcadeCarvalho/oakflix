"use client";

import Link from "next/link";

export const OakFooter = () => {
  return (
    <footer
      className="bg-app-background dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800"
      role="contentinfo"
      aria-labelledby="footer-content"
    >
      <div className="container mx-auto py-8 flex flex-col sm:flex-row items-center justify-between px-4 max-w-[1024px] gap-4">
        <p className="text-sm text-neutral-500" id="footer-content">
          © {new Date().getFullYear()} Oakflix. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
          <Link
            href="/privacy"
            className="hover:text-oakflix-moss"
            aria-label="Privacy Policy"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-colors-oak"
            aria-label="Terms and Conditions"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};
