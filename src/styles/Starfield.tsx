'use client';
import React, { useRef, useEffect } from 'react';

export default function Starfield({ count = 120 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const canvas = c as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // alias a non-null context so TypeScript won't complain inside nested functions
    const ctx2 = ctx;

    const devicePR = window.devicePixelRatio || 1;

    function resizeCanvas() {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.max(1, Math.floor(w * devicePR));
      canvas.height = Math.max(1, Math.floor(h * devicePR));
      ctx2.setTransform(devicePR, 0, 0, devicePR, 0, 0);
    }

    resizeCanvas();
    const stars = Array.from({ length: count }).map(() => ({
      x: Math.random() * (canvas.clientWidth || window.innerWidth),
      y: Math.random() * (canvas.clientHeight || window.innerHeight),
      r: Math.random() * 1.4 + 0.2,
      speed: 0.15 + Math.random() * 0.9,
      alpha: 0.4 + Math.random() * 0.6,
      tw: Math.random() > 0.5 ? 1 : -1
    }));

    const onResize = () => resizeCanvas();
    window.addEventListener('resize', onResize);

    function render() {
      ctx2.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (const s of stars) {
        s.y += s.speed;
        if (s.y > canvas.clientHeight + 10) s.y = -10;
        s.alpha += 0.01 * s.tw;
        if (s.alpha <= 0.2) { s.alpha = 0.2; s.tw = 1; }
        if (s.alpha >= 1) { s.alpha = 1; s.tw = -1; }

        ctx2.beginPath();
        ctx2.globalAlpha = s.alpha;
        ctx2.fillStyle = 'white';
        ctx2.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx2.fill();
      }
      ctx2.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ display: 'block' }}
    />
  );
}