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
        <div className='relative'>
            <nav className="sticky mt-2 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-gray-200 rounded-full p-1 sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/4 container flex justify-between items-center firefox:bg-opacity-90">
                <div className="container flex justify-between items-center">
                    <div className="flex items-center justify-between h-10">
                        <span className="text-2xl text-gray-900 font-semibold">Logo</span>
                    </div>
                    <div className="hidden md:flex space-x-4 text-gray-900">
                        <a href="#" className="hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform">Dashboard</a>
                        <a href="#" className="hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform">About</a>
                        <a href="#" className="hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform">Projects</a>
                        <a href="#" className="hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} className="text-gray-900 focus:outline-none">
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden absolute top-0 right-0 bg-white w-full h-full transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={toggleNavbar} className="text-gray-900 absolute top-4 right-4 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="flex flex-col items-center mt-10">
                        <a href="#" className="text-gray-900 py-2 hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform">Dashboard</a>
                        <a href="#" className="text-gray-900 py-2 hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform">About</a>
                        <a href="#" className="text-gray-900 py-2 hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform">Projects</a>
                        <a href="#" className="text-gray-900 py-2 hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform">Contact</a>
                    </div>
                </div>
            </nav>

            {children}
        </div>
    );
};

export default AuthLayout;
