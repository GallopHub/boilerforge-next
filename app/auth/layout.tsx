"use client";
import React, { ReactNode, useState } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <nav className="sticky mt-2 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-gray-200 rounded-full p-1 w-2/4 container flex justify-between items-center firefox:bg-opacity-90">
                <div className="container flex justify-between items-center">
                    <div className="flex items-center justify-between h-10">
                        <span className="text-2xl text-gray-900 font-semibold">Logo</span>
                    </div>
                    <div className="flex space-x-4 text-gray-900">
                        <a href="#">Dashboard</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </nav>

            {children}
        </div>
    );
};

export default AuthLayout;
