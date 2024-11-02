// src/components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 h-full w-64 bg-base-200 shadow-lg p-4 z-50">
            <h2 className="text-2xl font-bold mb-4">
                <Link href="/">D&D Info</Link>
            </h2>
            <ul className="menu p-0 space-y-4">
                <li>
                    <Link href="/" className="btn btn-ghost normal-case justify-start">Home</Link>
                </li>
                <li>
                    <Link href="/monsters" className="btn btn-ghost normal-case justify-start">Monsters</Link>
                </li>
                <li>
                    <Link href="/spells" className="btn btn-ghost normal-case justify-start">Spells</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
