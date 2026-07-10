import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Instant tracking values (Zero delay)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Extremely tight, snappy spring for the trailing ring so it doesn't feel sluggish
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable entirely on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      // Set instantly on every frame
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Better detection: use closest to catch icons inside buttons/links
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-amber-500 rounded-full pointer-events-none z-[9999]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(245, 158, 11, 0.15)' : 'rgba(245, 158, 11, 0)',
          borderColor: isHovering ? 'rgba(245, 158, 11, 0)' : 'rgba(245, 158, 11, 1)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      
      {/* Inner dot - Instant tracking (ZERO DELAY) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-amber-500 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />
    </>
  );
}
