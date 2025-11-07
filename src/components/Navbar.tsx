'use client';
import React from 'react';
import SidebarToggle from './SidebarToggle';

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0
        z-30
        flex items-center justify-between
        px-4 sm:px-6 md:px-12 lg:px-20
        py-3 md:py-4
        backdrop-blur-lg bg-white/10 border-b border-white/10
        shadow-sm
        transition-all duration-300
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <a
          href="#hero"
          className="
            text-transparent bg-clip-text
            bg-gradient-to-r from-[#4FC3F7] via-[#7E57C2] to-[#2196F3]
            text-lg md:text-xl font-bold tracking-wide
            hover:opacity-80 transition-opacity
          "
        >
          MAW.
        </a>
      </div>

      {/* Right side - menu toggle */}
      <div className="flex items-center gap-4">
        <SidebarToggle />
      </div>
    </nav>
  );
}
