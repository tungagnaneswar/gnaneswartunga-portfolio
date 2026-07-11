import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

type CursorVariant = 'default' | 'hover' | 'navbar' | 'tooltip';

export function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [text, setText] = useState('');
  const [navWidth, setNavWidth] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config requested: stiffness: 300, damping: 25, mass: 0.5
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices and if prefers-reduced-motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (isTouch || prefersReducedMotion) {
      setDisabled(true);
      return;
    }

    let rafId: number;
    let targetX = -100;
    let targetY = -100;

    const moveCursor = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const render = () => {
      cursorX.set(targetX);
      cursorY.set(targetY);
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') as CursorVariant;
        const cursorText = cursorTarget.getAttribute('data-cursor-text') || '';
        
        setVariant(type);
        setText(cursorText);

        if (type === 'navbar') {
          const rect = cursorTarget.getBoundingClientRect();
          setNavWidth(rect.width + 24); // Add some padding
        }
      } else if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setVariant('hover');
        setText('');
      } else {
        setVariant('default');
        setText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY, isVisible]);

  if (disabled) return null;

  const variants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: 'rgba(245, 158, 11, 0)',
      borderColor: 'rgba(245, 158, 11, 0.5)',
      boxShadow: '0 0 0px rgba(245, 158, 11, 0)',
      borderRadius: '50%',
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(245, 158, 11, 0.05)',
      borderColor: 'rgba(245, 158, 11, 0.2)',
      boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)',
      borderRadius: '50%',
    },
    navbar: {
      width: navWidth,
      height: 42,
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      borderColor: 'rgba(245, 158, 11, 0)',
      boxShadow: '0 0 0px rgba(245, 158, 11, 0)',
      borderRadius: '9999px', // pill shape
    },
    tooltip: {
      width: 80,
      height: 36,
      backgroundColor: 'rgba(28, 25, 23, 0.95)',
      borderColor: 'rgba(68, 64, 60, 0.5)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      borderRadius: '8px',
    },
  };

  const textVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 }
  };

  const showInnerDot = variant === 'default' || variant === 'hover' || variant === 'navbar';

  return (
    <>
      {/* Outer shape */}
      <motion.div
        className="fixed top-0 left-0 border-[1px] pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        variants={variants}
        animate={variant}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {text && (
            <motion.span
              key={text}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.15 }}
              className="text-[11px] font-semibold tracking-wide text-stone-100 capitalize"
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-amber-500 rounded-full pointer-events-none z-[9999]"
        style={{
          x: smoothX, // Using smoothX instead of instant cursorX so it stays centered inside the morphing shape
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: showInnerDot ? 1 : 0,
          opacity: showInnerDot && isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
