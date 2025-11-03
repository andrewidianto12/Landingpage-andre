'use client';
import React, { useMemo } from 'react';
import styles from './kerlap.module.css';

type Props = { name?: string };

export default function AnimatedName({ name = 'Muhammad Andre Widianto' }: Props) {
  const letters = useMemo(() => {
    return name.split('').map((ch, i) => {
      if (ch === ' ') {
        return { key: `sp-${i}`, ch: ' ', isSpace: true };
      }
      const delay = (Math.random() * 2).toFixed(2);
      const dur = (0.9 + Math.random() * 1.6).toFixed(2);
      return { key: `ch-${i}`, ch, isSpace: false, delay, dur };
    });
  }, [name]);

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