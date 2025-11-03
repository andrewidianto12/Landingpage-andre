'use client';
import React, { useRef, useEffect } from 'react';

export default function Starfield({ count = 120 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;

    const devicePR = window.devicePixelRatio || 1;

    function resizeCanvas() {
      // use the non-null canvas and context captured above
      const w = c.clientWidth || window.innerWidth;
      const h = c.clientHeight || window.innerHeight;
      c.width = Math.max(1, Math.floor(w * devicePR));
      c.height = Math.max(1, Math.floor(h * devicePR));
      ctx.setTransform(devicePR, 0, 0, devicePR, 0, 0);
    }

    resizeCanvas();
    const stars = Array.from({ length: count }).map(() => ({
      x: Math.random() * (c.clientWidth || window.innerWidth),
      y: Math.random() * (c.clientHeight || window.innerHeight),
      r: Math.random() * 1.4 + 0.2,
      speed: 0.15 + Math.random() * 0.9,
      alpha: 0.4 + Math.random() * 0.6,
      tw: Math.random() > 0.5 ? 1 : -1
    }));

    const onResize = () => resizeCanvas();
    window.addEventListener('resize', onResize);

    function render() {
      ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);

      for (const s of stars) {
        s.y += s.speed;
        if (s.y > c.clientHeight + 10) s.y = -10;
        s.alpha += 0.01 * s.tw;
        if (s.alpha <= 0.2) { s.alpha = 0.2; s.tw = 1; }
        if (s.alpha >= 1) { s.alpha = 1; s.tw = -1; }

        ctx.beginPath();
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = 'white';
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
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