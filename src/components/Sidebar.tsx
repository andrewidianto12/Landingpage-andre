'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const panelRef = useRef<HTMLElement | null>(null);

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

    // lock scroll and focus management
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) {
            // focus close button when opened
            setTimeout(() => closeBtnRef.current?.focus(), 50);
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // simple focus trap inside panel
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
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <>
            {/* overlay */}
            <div
                onClick={() => setOpen(false)}
                aria-hidden={!open}
            />

            {/* sidebar panel (right) */}
            <aside
                id="site-sidebar"
                ref={panelRef}
                aria-hidden={!open}
                className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[90%] transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
          bg-white/6 backdrop-blur-md border-l border-white/10 text-white p-6`}
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Menu</h3>
                    <button
                        ref={closeBtnRef}
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="p-1 rounded-md bg-white/4 hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        x
                    </button>
                </div>

                <nav className="flex flex-col gap-6 text-lg">
                    <a href="#about" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/4 transition">About</a>
                    <a href="#works" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/4 transition">Works</a>
                    <a href="#contact" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/4 transition">Contact</a>
                    <a href="/resume.pdf" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/4 transition">Resume</a>
                </nav>

                <div className="mt-8 border-t border-white/6 pt-6 text-sm text-gray-200">
                    <p>DevOps Engineer</p>
                    <p className="mt-2">Cloud · CI/CD · Golang</p>
                </div>
            </aside>
        </>
    );
}