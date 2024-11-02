// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="container mx-auto p-4">{children}</main>
        </>
    );
};

export default Layout;
