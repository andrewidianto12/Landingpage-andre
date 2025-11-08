'use client';
import React from 'react';

export default function footer() {
    return (
        <footer className="relative mt-20 overflow-hidden rounded-t-2xl border-t border-white/10 bg-white/5 backdrop-blur-2xl text-gray-300 py-8 px-6 sm:px-12 lg:px-20 shadow-[0_0_30px_rgba(79,195,247,0.15)]">
            {/* Subtle gradient glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-[#7E57C2]/10 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: Branding */}
                <p className="text-sm text-center md:text-left">
                    © {new Date().getFullYear()}{' '}
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] via-[#7E57C2] to-[#2196F3]">
                        Muhammad Andre Widianto
                    </span>{' '}
                    — All rights reserved
                </p>

                {/* Right: Social links */}
                <div className="flex gap-5 text-sm">
                    <a
                        href="https://github.com/andrewidianto12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4FC3F7] transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/muhammad-andre-widianto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#7E57C2] transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:andre@example.com"
                        className="hover:text-[#2196F3] transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
