'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 backdrop-blur-lg bg-white/10 border-b border-white/10 shadow-sm transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <a
          href="#hero"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] via-[#7E57C2] to-[#2196F3] text-lg md:text-xl font-bold tracking-wide hover:opacity-80 transition-opacity"
        >
          MAW.
        </a>
      </div>

      {/* Menu (desktop) */}
      <div className="hidden md:flex items-center gap-8 text-white font-medium">
        <a href="#about" className="hover:text-[#4FC3F7] transition-colors">About</a>
        <a href="#works" className="hover:text-[#4FC3F7] transition-colors">Experience</a>
        <a href="#contact" className="hover:text-[#4FC3F7] transition-colors">Contact</a>
        <a href="/resume.pdf" className="hover:text-[#4FC3F7] transition-colors">Resume</a>
      </div>

      {/* Hamburger (mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white"
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-900/90 backdrop-blur-lg border-t border-white/10 flex flex-col items-center gap-4 py-6 text-white md:hidden animate-fade-in-down">
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-[#4FC3F7] transition-colors">About</a>
          <a href="#works" onClick={() => setOpen(false)} className="hover:text-[#4FC3F7] transition-colors">Experience</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-[#4FC3F7] transition-colors">Contact</a>
          <a href="/resume.pdf" onClick={() => setOpen(false)} className="hover:text-[#4FC3F7] transition-colors">Resume</a>
        </div>
      )}
    </nav>
  );
}
