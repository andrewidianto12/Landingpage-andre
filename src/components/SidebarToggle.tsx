'use client';
import React from 'react';

export default function SidebarToggle({ className = '' }: { className?: string }) {
    const open = () => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('open-sidebar'));
        }
    };

    return (
        <button
            onClick={open}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-md text-sm text-gray-200 hover:text-white transition bg-transparent ${className}`}
            aria-label="Open menu"
            title="Open menu"
        >
            ☰
        </button>
    );
}