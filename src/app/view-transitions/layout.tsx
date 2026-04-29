"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ViewTransitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/+$/, "");

  const homeActive = normalizedPathname === "/view-transitions";
  const articlesActive = normalizedPathname.startsWith(
    "/view-transitions/articles",
  );
  const aboutActive = normalizedPathname.startsWith("/view-transitions/about");
  const contactActive = normalizedPathname.startsWith(
    "/view-transitions/contact",
  );

  return (
    <div>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
            </div>
            <nav className="relative hidden md:flex space-x-8">
              {(homeActive ||
                articlesActive ||
                aboutActive ||
                contactActive) && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute h-[2px] bg-gray-900 transition-[left,top,width] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] [position-anchor:--active-nav] left-[anchor(left)] top-[calc(anchor(bottom)+2px)] w-[anchor-size(width)]"
                />
              )}
              <Link
                href="/view-transitions"
                aria-current={homeActive ? "page" : undefined}
                className={classNames(
                  "inline-block text-gray-600 hover:text-gray-900 transition-colors",
                  homeActive && "text-gray-900",
                  homeActive && "[anchor-name:--active-nav]",
                )}
              >
                Home
              </Link>
              <Link
                href="/view-transitions/articles"
                aria-current={articlesActive ? "page" : undefined}
                className={classNames(
                  "inline-block text-gray-600 hover:text-gray-900 transition-colors",
                  articlesActive && "text-gray-900",
                  articlesActive && "[anchor-name:--active-nav]",
                )}
              >
                Articles
              </Link>
              <Link
                href="/view-transitions/about"
                aria-current={aboutActive ? "page" : undefined}
                className={classNames(
                  "inline-block text-gray-600 hover:text-gray-900 transition-colors",
                  aboutActive && "text-gray-900",
                  aboutActive && "[anchor-name:--active-nav]",
                )}
              >
                About
              </Link>
              <Link
                href="/view-transitions/contact"
                aria-current={contactActive ? "page" : undefined}
                className={classNames(
                  "inline-block text-gray-600 hover:text-gray-900 transition-colors",
                  contactActive && "text-gray-900",
                  contactActive && "[anchor-name:--active-nav]",
                )}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
