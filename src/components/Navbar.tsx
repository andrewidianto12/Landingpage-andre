'use client';
import React from 'react';
import SidebarToggle from './SidebarToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-5xl z-50 rounded-xl backdrop-blur-md bg-white/6 border border-white/10 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <a href="#projects" className="text-gray-200 hover:text-white">MAW.</a>

        </div>
      </div>
      <div className="flex items-center gap-4">
        <SidebarToggle />
      </div>
    </nav>
  );
}
