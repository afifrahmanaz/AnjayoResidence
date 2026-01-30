'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Minimalist Icons
const Icons = {
    Bed: () => (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 4v16" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 8h18a2 2 0 0 1 2 2v10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 17h20" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 8v9" />
        </svg>
    ),
    Bath: () => (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 12h13.5h-13.5zm1.5 6v2.25m10.5-2.25v2.25" />
        </svg>
    ),
    Kitchen: () => (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25v12a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 013.75 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9" />
        </svg>
    ),
    Water: () => (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
    ),
    Electricity: () => (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
    ),
    Car: () => (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
    ),
};

const facilities = [
    {
        Icon: Icons.Bed,
        title: '2 Kamar Tidur',
        description: 'Ruang tidur luas dengan ventilasi optimal',
    },
    {
        Icon: Icons.Bath,
        title: '1 Kamar Mandi',
        description: 'Kamar mandi modern dengan instalasi berkualitas',
    },
    {
        Icon: Icons.Kitchen,
        title: 'Meja Dapur',
        description: 'Dapur set lengkap siap pakai',
    },
    {
        Icon: Icons.Water,
        title: 'Air Sumur Bor',
        description: 'Air bersih tersedia 24 jam',
    },
    {
        Icon: Icons.Electricity,
        title: 'Listrik 1300 Watt',
        description: 'Daya listrik cukup untuk kebutuhan rumah',
    },
    {
        Icon: Icons.Car,
        title: 'Carport',
        description: 'Area parkir luas untuk kendaraan',
    },
];

export default function Facilities() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="facilities" className="py-12 lg:py-24 bg-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content - Corporate Style */}
                    <div
                        className={`transition-all duration-600 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    >
                        <span className="block text-sm font-bold tracking-[0.2em] text-[#64748B] uppercase mb-2 font-sans">
                            Fasilitas
                        </span>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F2A4A] mb-4 tracking-tight uppercase font-sans">
                            Fitur Lengkap
                        </h2>
                        <p className="text-base text-[#64748B] leading-relaxed mb-10 max-w-lg font-sans font-medium">
                            Setiap unit dilengkapi dengan fasilitas terbaik untuk kenyamanan keluarga Anda
                        </p>

                        {/* Facility Grid - Updated Icons */}
                        <div className="grid grid-cols-2 gap-2 md:gap-4">
                            {facilities.map((Facility, index) => (
                                <div
                                    key={index}
                                    className={`group bg-white border border-gray-100 rounded p-3 md:p-4 hover:border-[#0F2A4A] hover:bg-[#F8FAFC] transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    style={{ transitionDelay: `${index * 80}ms` }}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="text-[#0F2A4A] group-hover:scale-110 transition-transform duration-300 mt-1">
                                            <Facility.Icon />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0F2A4A] text-xs md:text-sm uppercase mb-1 font-sans tracking-wide">
                                                {Facility.title}
                                            </h4>
                                            <p className="text-[10px] md:text-xs text-[#64748B] leading-relaxed line-clamp-2 md:line-clamp-none">
                                                {Facility.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image - Plain & Clean */}
                    <div
                        className={`relative transition-all duration-600 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                        <div className="relative rounded-md overflow-hidden shadow-xl bg-white border-4 border-white aspect-[4/3] w-full">
                            <Image
                                src="/desain/fasilitas_new.jpeg"
                                alt="Fasilitas Anjayo Residence"
                                fill
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Simple Corporate Sticker */}
                        <div className="absolute -bottom-5 -left-5 bg-[#0F2A4A] text-white p-4 rounded shadow-xl flex items-center gap-3 w-48">
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-xs font-medium uppercase tracking-wider leading-tight text-white/80">
                                Kepuasan Pelanggan
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
