'use client'; // Ensure client rendering

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center max-w-4xl mx-auto justify-between px-6 py-3 bg-transparent ">
      <Link href="/" className="flex items-center">
        <div className="w-6 h-6 mr-2">
          <Image 
            src="/logo.png" 
            alt="Anthony La Rocca Logo" 
            width={24} 
            height={24} 
            priority
          />
        </div>
        <span className="text-gray-800 font-medium">Anthony La Rocca</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-4">
        <Link href="/home" className="text-gray-800 uppercase text-sm font-medium hover:text-gray-600">HOME</Link>
        <Link href="/meetanthony" className="text-gray-800 uppercase text-sm font-medium hover:text-gray-600">MEET ANTHONY</Link>
        <Link href="/elevateunlimited" className="text-gray-800 uppercase text-sm font-medium hover:text-gray-600">ELEVATE UNLIMITED</Link>
        <Link href="/support" className="text-gray-800 uppercase text-sm font-medium hover:text-gray-600">SUPPORT</Link>
      </nav>

      <div className="flex items-center space-x-3">
        <button className="text-gray-800 hover:text-gray-600">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        <button className="text-gray-800 hover:text-gray-600">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M14.828 9.172a5 5 0 010 7.072m0 0l-2.829-2.829m2.829 2.829L18 18M4.929 19.071a9 9 0 010-12.728m0 0l2.829 2.829M4.929 6.343L3 8M9.172 14.828a5 5 0 010-7.072m0 0l2.829 2.829m-2.829-2.829L9 10" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
