/**
 * CustomCursor
 * ─────────────────────────────────────────────────────────────────
 * Design: amber dot (6 px) + thin outer ring (28 px default / 44 px hover).
 * Priority: smoothness > fancy. Works like Linear / Vercel / Apple cursors.
 *
 * Performance contract:
 *  - Zero React state updates on every frame (motion values only).
 *  - Single rAF loop drives both cursors.
 *  - No box-shadow / filter / blur on the ring elements.
 *  - Hover detection via delegated mouseover + data-cursor-hover attribute.
 *
 * Reliability contract:
 *  - mouseleave on document + blur on window both reset hover + hide cursor.
 *  - focus on window allows cursor to reappear on next mousemove.
 *  - Disabled entirely on touch devices and when prefers-reduced-motion is set.
 */

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// ─── Constants ──────────────────────────────────────────────────────────────
const DOT_SIZE    = 6;   // px — amber filled circle
const RING_DEFAULT = 28; // px — outer ring diameter at rest
const RING_HOVER   = 44; // px — outer ring diameter on interactive elements

// Dot: very tight — feels glued to the real cursor
const DOT_SPRING  = { stiffness: 900, damping: 50, mass: 0.2 };
// Ring: slightly softer — trails just enough to add elegance
const RING_SPRING = { stiffness: 600, damping: 40, mass: 0.4 };

// ─── Helpers ─────────────────────────────────────────────────────────────────
function isTouchDevice(): boolean {
  return window.matchMedia('(pointer: coarse)').matches;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isInteractive(el: HTMLElement): boolean {
  if (el.closest('[data-cursor-hover]')) return true;
  const tag = el.tagName.toLowerCase();
  if (tag === 'a' || tag === 'button' || tag === 'label' || tag === 'select') return true;
  if (el.closest('a') || el.closest('button')) return true;
  return window.getComputedStyle(el).cursor === 'pointer';
}

// ─── Component ───────────────────────────────────────────────────────────────
export function CustomCursor() {
  // Motion values — mutated directly, never trigger React re-renders
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth spring position for the ring
  const ringX = useSpring(mouseX, RING_SPRING);
  const ringY = useSpring(mouseY, RING_SPRING);

  // Dot follows raw position via a very tight spring
  const dotX = useSpring(mouseX, DOT_SPRING);
  const dotY = useSpring(mouseY, DOT_SPRING);

  // Refs for imperative DOM mutations (avoids React re-renders)
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  const isHovered = useRef(false);
  const isVisible = useRef(false);
  const rafId     = useRef<number>(0);

  // Live mouse coordinates — written by mousemove, consumed by rAF
  const liveX = useRef(-200);
  const liveY = useRef(-200);

  useEffect(() => {
    // Guard: completely disable on touch / reduced-motion
    if (isTouchDevice() || prefersReducedMotion()) {
      document.body.style.cursor = '';
      return;
    }

    // Show the system cursor along with the custom cursor
    document.body.style.cursor = 'auto';

    // ── Imperative helpers ────────────────────────────────────────────────
    const setRingSize = (hover: boolean) => {
      if (!ringRef.current) return;
      const size = hover ? RING_HOVER : RING_DEFAULT;
      ringRef.current.style.width  = `${size}px`;
      ringRef.current.style.height = `${size}px`;
    };

    const setVisibility = (visible: boolean) => {
      if (!ringRef.current || !dotRef.current) return;
      const v = visible ? '1' : '0';
      ringRef.current.style.opacity = v;
      dotRef.current.style.opacity  = v;
      isVisible.current = visible;
    };

    // ── rAF loop: push live coords into motion values ─────────────────────
    const tick = () => {
      mouseX.set(liveX.current);
      mouseY.set(liveY.current);
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    // ── Event: track mouse position ───────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      liveX.current = e.clientX;
      liveY.current = e.clientY;
      if (!isVisible.current) setVisibility(true);
    };

    // ── Event: hover detection via delegation ─────────────────────────────
    const onMouseOver = (e: MouseEvent) => {
      const hover = isInteractive(e.target as HTMLElement);
      if (hover !== isHovered.current) {
        isHovered.current = hover;
        setRingSize(hover);
      }
    };

    const resetHover = () => {
      if (isHovered.current) {
        isHovered.current = false;
        setRingSize(false);
      }
    };

    // ── Event: cursor leaves the document ────────────────────────────────
    const onMouseLeave = () => {
      resetHover();
      setVisibility(false);
      liveX.current = -200;
      liveY.current = -200;
    };

    // ── Event: window loses focus (tab switch, alt-tab) ───────────────────
    const onWindowBlur = () => {
      resetHover();
      setVisibility(false);
    };

    // ── Attach all listeners ──────────────────────────────────────────────
    window.addEventListener('mousemove',    onMouseMove,  { passive: true });
    window.addEventListener('mouseover',    onMouseOver,  { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('blur',         onWindowBlur);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove',    onMouseMove);
      window.removeEventListener('mouseover',    onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('blur',         onWindowBlur);
      document.body.style.cursor = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* ── Outer ring ─────────────────────────────────────────────────── */}
      <motion.div
        ref={ringRef}
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width:  RING_DEFAULT,
          height: RING_DEFAULT,
          // CSS transition for size changes (driven imperatively)
          transition: 'width 0.15s cubic-bezier(0.4,0,0.2,1), height 0.15s cubic-bezier(0.4,0,0.2,1), opacity 0.2s',
          opacity: 0,
        }}
        className="fixed top-0 left-0 rounded-full border border-amber-500/50 pointer-events-none z-[9999] will-change-transform"
      />

      {/* ── Inner amber dot ──────────────────────────────────────────────── */}
      <motion.div
        ref={dotRef}
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width:  DOT_SIZE,
          height: DOT_SIZE,
          transition: 'opacity 0.2s',
          opacity: 0,
        }}
        className="fixed top-0 left-0 rounded-full bg-amber-500 pointer-events-none z-[9999] will-change-transform"
      />
    </>
  );
}
