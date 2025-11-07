'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const panelRef = useRef<HTMLElement | null>(null);

    // listen event untuk buka sidebar
    useEffect(() => {
        const onOpen = () => setOpen(true);
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };

        window.addEventListener('open-sidebar', onOpen as EventListener);
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('open-sidebar', onOpen as EventListener);
            window.removeEventListener('keydown', onKey);
        };
    }, []);

    // lock scroll dan auto focus
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) setTimeout(() => closeBtnRef.current?.focus(), 50);
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // focus trap agar tab tetap di panel
    useEffect(() => {
        if (!open || !panelRef.current) return;
        const panel = panelRef.current;
        const focusable = Array.from(
            panel.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
            )
        ).filter(Boolean);

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const onKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <>
            {/* overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                    aria-hidden={!open}
                />
            )}

            {/* sidebar panel */}
            <aside
                id="site-sidebar"
                ref={panelRef}
                aria-hidden={!open}
                className={`fixed top-0 right-0 z-[80] h-full w-full sm:w-[80%] md:w-[400px] max-w-full
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
          bg-gray-900/90 backdrop-blur-lg border-l border-white/10 text-white p-6 flex flex-col`}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Menu</h3>
                    <button
                        ref={closeBtnRef}
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="p-2 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        ✕
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-5 text-lg">
                    <a href="#about" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/10 transition">About</a>
                    <a href="#works" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/10 transition">Works</a>
                    <a href="#contact" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/10 transition">Contact</a>
                    <a href="/resume.pdf" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/10 transition">Resume</a>
                </nav>

                {/* Footer */}
                <div className="mt-auto border-t border-white/10 pt-6 text-sm text-gray-300">
                    <p>Create at 2025</p>
                </div>
            </aside>
        </>
    );
}
