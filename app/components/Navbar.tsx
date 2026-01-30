'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/#property', label: 'Produk Kami' },
        { href: '/#facilities', label: 'Fasilitas' },
        {
            href: '#',
            label: 'Lokasi',
            children: [
                { href: '/property/12', label: 'Anjayo Residence 12' },
                { href: '/property/15', label: 'Anjayo Residence 15' },
                { href: '/property/16', label: 'Anjayo Residence 16' },
            ]
        },
        { href: '/virtual-tour', label: 'Virtual Tour' },
        { href: '/#contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-lg py-1'
                : 'bg-transparent py-2'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center transition-transform hover:scale-105 overflow-visible -ml-6">
                        <div className="relative w-12 h-12 overflow-visible">
                            {/* Logo Filtered (Biru) */}
                            <Image
                                src="/logo-final.png"
                                alt="Anjayo Logo Blue"
                                fill
                                className={`object-contain scale-[4] origin-left transition-opacity duration-500 absolute inset-0 ${scrolled ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
                                style={{
                                    filter: 'brightness(0) saturate(100%) invert(13%) sepia(90%) saturate(3660%) hue-rotate(205deg) brightness(96%) contrast(101%)'
                                }}
                                priority
                            />
                            {/* Logo Original (Putih) */}
                            <Image
                                src="/logo-final.png"
                                alt="Anjayo Logo White"
                                fill
                                className={`object-contain scale-[4] origin-left transition-opacity duration-500 absolute inset-0 ${scrolled ? 'opacity-0 z-0' : 'opacity-100 z-20'}`}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.label} className="relative group">
                                {link.children ? (
                                    <div className="relative">
                                        <button
                                            className={`flex items-center gap-1 font-medium text-[14px] transition-all duration-300 hover:opacity-70 ${scrolled ? 'text-[#334155]' : 'text-white'
                                                }`}
                                        >
                                            {link.label}
                                            <svg
                                                className="w-3 h-3 transition-transform group-hover:rotate-180"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-1">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F8FAFC] hover:text-[#1B8DBA] transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`font-medium text-[14px] transition-all duration-300 hover:opacity-70 ${scrolled ? 'text-[#334155]' : 'text-white'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden text-2xl ${scrolled ? 'text-[#0F2A4A]' : 'text-white'
                            }`}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-xl py-6 animate-fadeIn">
                        <ul className="flex flex-col gap-1 px-6">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    {link.children ? (
                                        <div>
                                            <button
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                                className="flex items-center justify-between w-full text-[#334155] font-medium py-3 border-b border-gray-100"
                                            >
                                                {link.label}
                                                <svg
                                                    className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {dropdownOpen && (
                                                <div className="pl-4 bg-gray-50/50 rounded-lg mt-1">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="block text-gray-600 text-sm py-2.5 hover:text-[#1B8DBA]"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-[#334155] font-medium py-3 border-b border-gray-100 hover:text-[#1B8DBA] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
