"use client";

import "./view-transition.css";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ViewTransitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
            </div>
            <nav className="relative hidden md:flex space-x-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute h-[2px] bg-gray-900 transition-[left,top,width] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] [position-anchor:--active-nav] left-[anchor(left)] top-[calc(anchor(bottom)+2px)] w-[anchor-size(width)]"
              />
              <NavigationLink href="/view-transitions">Home</NavigationLink>
              <NavigationLink href="/view-transitions/articles">
                Articles
              </NavigationLink>
              <NavigationLink href="/view-transitions/about">
                About
              </NavigationLink>
              <NavigationLink href="/view-transitions/contact">
                Contact
              </NavigationLink>
            </nav>
          </div>
        </div>
      </header>
      <div className="main-content relative">
        <div className="canvas-content">{children}</div>
        <canvas
          className="transition-canvas absolute inset-0 pointer-events-none"
          layoutsubtree="true"
          suppressHydrationWarning
        ></canvas>
      </div>
    </div>
  );
}

function NavigationLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/+$/, "");

  const isActive = normalizedPathname === href;
  const router = useRouter();

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={(e) => {
        e.preventDefault();
        const wrapper = document.querySelector(".main-content") as HTMLElement;

        const canvasContent = document.querySelector(
          ".canvas-content",
        ) as HTMLElement;
        const canvas = document.querySelector(
          ".transition-canvas",
        ) as HTMLCanvasElement;
        const cssWidth = canvasContent.offsetWidth;
        const cssHeight = canvasContent.offsetHeight;
        const dpr =
          typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

        // Keep layout in CSS pixels, but render at device pixel resolution to avoid blur.
        canvas.style.width = `${cssWidth}px`;
        canvas.style.height = `${cssHeight}px`;
        canvas.width = Math.max(1, Math.round(cssWidth * dpr));
        canvas.height = Math.max(1, Math.round(cssHeight * dpr));

        const copiedContent = canvasContent.cloneNode(true) as HTMLElement;
        canvas.innerHTML = "";
        canvas.appendChild(copiedContent);
        copiedContent.style.width = "100%";
        canvas.onpaint = () => {
          const ctx = canvas.getContext("2d");
          if (!ctx) return;

          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawElementImage(copiedContent, 0, 0);
          explodeAnimation(canvas, ctx);
        };

        router.push(href);
      }}
      className={classNames(
        "inline-block text-gray-600 hover:text-gray-900 transition-colors",
        isActive && "text-gray-900",
        isActive && "[anchor-name:--active-nav]",
      )}
    >
      {children}
    </Link>
  );
}

function explodeAnimation(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  // Cancel any in-flight explosion on the same canvas.
  const prevCancel = (canvas as unknown as { __explodeCancel?: () => void })
    .__explodeCancel;
  if (prevCancel) prevCancel();

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  if (prefersReducedMotion) {
    // Keep navigation snappy and avoid motion.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const width = canvas.width;
  const height = canvas.height;
  if (width <= 0 || height <= 0) return;

  // Snapshot current canvas before we start clearing/animating it.
  const snapshot = document.createElement("canvas");
  snapshot.width = width;
  snapshot.height = height;
  const sctx = snapshot.getContext("2d");
  if (!sctx) return;
  sctx.drawImage(canvas, 0, 0);

  const cols = 10;
  const rows = 10;
  const pieceW = width / cols;
  const pieceH = height / rows;

  const centerX = width / 2;
  const centerY = height / 2;
  const now = performance.now();
  const durationMs = 1000;

  type Piece = {
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    cx: number;
    cy: number;
    dx: number;
    dy: number;
    vrot: number;
    delayMs: number;
  };

  const pieces: Piece[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const sx = col * pieceW;
      const sy = row * pieceH;
      const sw = col === cols - 1 ? width - sx : pieceW;
      const sh = row === rows - 1 ? height - sy : pieceH;

      const cx = sx + sw / 2;
      const cy = sy + sh / 2;

      // Push pieces away from the center with a little randomness.
      const dx = cx - centerX;
      const dy = cy - centerY;
      const dist = Math.max(1, Math.hypot(dx, dy));
      const ux = dx / dist;
      const uy = dy / dist;

      // Ensure each piece ends fully outside the canvas.
      // We approximate the piece bounds with a radius, then move its center past
      // the canvas edges by that radius + a safety margin.
      const r = Math.hypot(sw, sh) / 2;
      const margin = 60 + Math.random() * 120;

      const tx =
        ux > 1e-6
          ? (width + r + margin - cx) / ux
          : ux < -1e-6
            ? (-r - margin - cx) / ux
            : Number.POSITIVE_INFINITY;
      const ty =
        uy > 1e-6
          ? (height + r + margin - cy) / uy
          : uy < -1e-6
            ? (-r - margin - cy) / uy
            : Number.POSITIVE_INFINITY;

      const tExit = Math.min(tx, ty);
      const tFinal = tExit + 80 + Math.random() * 200;

      // Add a small perpendicular component for variety.
      const px = -uy;
      const py = ux;
      const jitter = (Math.random() - 0.5) * 90;

      const dxFinal = ux * tFinal + px * jitter;
      const dyFinal = uy * tFinal + py * jitter;

      pieces.push({
        sx,
        sy,
        sw,
        sh,
        cx,
        cy,
        dx: dxFinal,
        dy: dyFinal,
        vrot: (Math.random() - 0.5) * 2.2,
        delayMs: Math.random() * 90,
      });
    }
  }

  const easeInOutQuint = (t: number) =>
    t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * t + 2, 5) / 2;

  let raf = 0;
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
    if (raf) cancelAnimationFrame(raf);
  };
  (canvas as unknown as { __explodeCancel?: () => void }).__explodeCancel =
    cancel;

  const drawFrame = (tNow: number) => {
    if (cancelled) return;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);

    let allDone = true;

    for (const p of pieces) {
      const localT = (tNow - now - p.delayMs) / durationMs;
      const clamped = Math.min(1, Math.max(0, localT));
      if (clamped < 1) allDone = false;

      const e = easeInOutQuint(clamped);
      const x = p.cx + p.dx * e;
      const y = p.cy + p.dy * e;
      const rot = p.vrot * e;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.translate(-p.sw / 2, -p.sh / 2);
      ctx.drawImage(snapshot, p.sx, p.sy, p.sw, p.sh, 0, 0, p.sw, p.sh);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    if (allDone) {
      ctx.clearRect(0, 0, width, height);
      cancel();
      return;
    }

    raf = requestAnimationFrame(drawFrame);
  };

  raf = requestAnimationFrame(drawFrame);
}
