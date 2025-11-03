'use client';
import React, { useEffect, useRef } from 'react';
import styles from '../styles/cursor.module.css';

export default function CustomCursor() {
  const glassRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const styleElRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return; 

    const glass = glassRef.current!;
    const dot = dotRef.current!;
    const prevCursor = document.body.style.cursor;

    document.documentElement.classList.add('has-custom-cursor');

    const styleEl = document.createElement('style');
    styleEl.id = 'custom-cursor-hide-style';
    styleEl.textContent = `
      .has-custom-cursor *:not(input):not(textarea):not(select):not(.allow-native-cursor) {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);
    styleElRef.current = styleEl;

    document.body.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      glass.style.opacity = '1';
      dot.style.opacity = '1';
    };

    const onLeave = () => {
      glass.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onDown = () => {
      glass.classList.add(styles.active);
      dot.classList.add(styles.activeDot);
    };
    const onUp = () => {
      glass.classList.remove(styles.active);
      dot.classList.remove(styles.activeDot);
    };

    const onPointerOver = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      if ((t as Element).closest && (t as Element).closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')) {
        glass.classList.add(styles.hover);
      }
    };
    const onPointerOut = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      if ((t as Element).closest && (t as Element).closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')) {
        glass.classList.remove(styles.hover);
      }
    };

    function render() {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;

      glass.style.transform = `translate3d(${pos.current.x - 18}px, ${pos.current.y - 18}px, 0)`;
      dot.style.transform = `translate3d(${mouse.current.x - 3}px, ${mouse.current.y - 3}px, 0)`;

      raf.current = requestAnimationFrame(render);
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);

    raf.current = requestAnimationFrame(render);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);

      // restore
      document.body.style.cursor = prevCursor;
      document.documentElement.classList.remove('has-custom-cursor');
      if (styleElRef.current && styleElRef.current.parentNode) {
        styleElRef.current.parentNode.removeChild(styleElRef.current);
      }
    };
  }, []);

  return (
    <div aria-hidden className={styles.cursorWrapper}>
      <div ref={glassRef} className={styles.cursorGlass} />
      <div ref={dotRef} className={styles.cursorDot} />
    </div>
  );
}