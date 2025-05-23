"use client";

import { useEffect, useRef } from "react";

export function IsSticky({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sentinelRef.current || !contentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sentinelRef.current) {
            if (!entry.isIntersecting) {
              document.startViewTransition(() => {
                contentRef.current?.setAttribute("data-sticky", "true");
              });
            } else {
              document.startViewTransition(() => {
                contentRef.current?.removeAttribute("data-sticky");
              });
            }
          }
        });
      },
      { threshold: [0] }
    );

    observer.observe(sentinelRef.current);

    window.addEventListener("resize", () => {
      if (!sentinelRef.current || !contentRef.current) return;
      observer.unobserve(sentinelRef.current);
      observer.observe(sentinelRef.current);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", () => {});
    };
  });

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute -inset-x-48 h-px border border-dotted border-green-200"
      />
      <div ref={contentRef} {...props}>
        {children}
      </div>
    </>
  );
}
