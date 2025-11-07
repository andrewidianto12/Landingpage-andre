'use client';
import React from 'react';
import SidebarToggle from './SidebarToggle';

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 
        z-50 
        flex items-center justify-between 
        px-4 sm:px-6 md:px-12 lg:px-20 
        py-3 md:py-4 
        backdrop-blur-md bg-white/10 border-b border-white/10
        transition-all duration-300
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <a
          href="#projects"
          className="text-white text-lg md:text-xl font-semibold tracking-wide hover:text-blue-300 transition"
        >
          MAW.
        </a>
      </div>

      {/* Right side - toggle */}
      <div className="flex items-center gap-4">
        <SidebarToggle />
      </div>
    </nav>
  );
}
