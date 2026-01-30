'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VirtualTour() {
    return (
        <section id="virtual-tour" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Parallax-like feel (Fixed) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/desain/baru.png"
                    alt="Interior Background"
                    fill
                    className="object-cover opacity-30 select-none scale-105"
                    priority
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A] via-[#0F2A4A]/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">


                {/* Main Text */}
                <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                    Virtual Tour
                </h1>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-[1px] w-12 bg-blue-400/50"></div>
                    <p className="text-blue-200 font-inter tracking-[0.3em] text-sm uppercase">
                        Experience Every Detail
                    </p>
                    <div className="h-[1px] w-12 bg-blue-400/50"></div>
                </div>

                <div className="relative inline-block py-6 px-12 border-y border-white/10 bg-white/5 backdrop-blur-sm mx-auto max-w-xl">
                    <span className="block font-montserrat font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white animate-text-shimmer bg-[length:200%_auto]">
                        COMING SOON
                    </span>
                    <p className="mt-4 text-gray-400 font-light text-sm">
                        Kami sedang menyiapkan pengalaman 360° terbaik untuk Anda.
                    </p>
                </div>

                <div className="mt-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 font-inter text-sm border-b border-transparent hover:border-white pb-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </section>
    );
}
