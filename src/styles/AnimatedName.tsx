'use client';
import React, { useMemo } from 'react';
import styles from './kerlap.module.css';

type Props = { name?: string };

function hashString(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function AnimatedName({ name = 'Muhammad Andre Widianto' }: Props) {
  const seed = hashString(name);
  const letters = name.split('').map((ch, i) => {
    if (ch === ' ') return { key: `sp-${i}`, ch: ' ', isSpace: true };
    const gen = mulberry32(seed + i * 997); // deterministic per-index
    const delay = (gen() * 2).toFixed(2);
    const dur = (0.9 + gen() * 1.6).toFixed(2);
    return { key: `ch-${i}`, ch, isSpace: false, delay, dur };
  });

  return (
    <h1
      className="text-6xl font-bold bg-clip-text text-transparent animate-shimmer"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgb(56 189 248), rgb(139 92 246), rgb(236 72 153))',
        backgroundSize: '200% 200%',
        filter: 'drop-shadow(0 0 20px rgb(147 51 234 / 0.5))'
      }}
    >
      {letters.map(({ key, ch, isSpace, delay, dur }) =>
        isSpace ? (
          <span key={key} className="inline-block w-4" aria-hidden="true">{' '}</span>
        ) : (
          <span
            key={key}
            className={styles.kerlap}
            style={{ animationDelay: `${delay}s`, animationDuration: `${dur}s` }}
          >
            {ch}
          </span>
        )
      )}
    </h1>
  );
}