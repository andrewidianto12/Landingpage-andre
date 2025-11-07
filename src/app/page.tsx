import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      {/* ...section lain jika ada */}
    </>
  );
}
