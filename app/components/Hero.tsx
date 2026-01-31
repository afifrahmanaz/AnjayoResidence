'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-gemini.png"
                    alt="Anjayo Residence"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Very subtle overlay - just for text readability */}
                <div className="absolute inset-0 bg-black/25" />
                {/* Subtle blue tint on edges only */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A4A]/30 via-transparent to-[#0F2A4A]/40" />
            </div>

            {/* Top subtle gradient */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0F2A4A]/50 to-transparent z-[1]" />

            {/* Bottom subtle gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F2A4A]/50 to-transparent z-[1]" />

            {/* Content - Centered vertically */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                {/* Main Title - UPPERCASE & Strong */}
                <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-wider drop-shadow-xl uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Anjayo Residence
                </h1>

                {/* Subtitle - Single line, slightly smaller */}
                <p className="text-sm md:text-base font-normal opacity-95 max-w-3xl mx-auto mb-8 leading-relaxed text-white drop-shadow-lg">
                    Properti eksklusif dengan proses pengajuan mudah dan cicilan mulai Rp1 juta per bulan
                </p>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-[#1B8DBA] hover:bg-[#167A9E] text-white px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#1B8DBA]/30 hover:-translate-y-0.5 border-2 border-[#1B8DBA] hover:border-white hover:bg-transparent"
                >
                    Booking Sekarang
                </a>
            </div>
        </section>
    );
}
