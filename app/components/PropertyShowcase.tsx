'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

// Data Properties - All images same, no prices, compact
const properties = [
    {
        id: 1,
        name: 'ANJAYO 12',
        location: 'Gerunggang, Tua Tunu, Pangkalpinang',
        image: '/desain/50C676A3-4FB9-4A65-A6D3-E2AD77C31F7B.png',
        specs: [
            { type: 'area', label: '36/84 m²' },
            { type: 'bed', label: '2 KT' },
            { type: 'bath', label: '1 KM' },
            { type: 'car', label: '1 Carport' },
        ],
        remaining: '1',
        status: 'available',
    },
    {
        id: 2,
        name: 'ANJAYO 16',
        location: 'Jerambah Gantung, Gabek, Pangkalpinang',
        image: '/desain/50C676A3-4FB9-4A65-A6D3-E2AD77C31F7B.png',
        specs: [
            { type: 'area', label: '36/84 m²' },
            { type: 'bed', label: '2 KT' },
            { type: 'bath', label: '1 KM' },
            { type: 'car', label: '1 Carport' },
        ],
        remaining: '29',
        status: 'available',
    },
    {
        id: 3,
        name: 'ANJAYO 15',
        location: 'Gerunggang, Tua Tunu, Pangkalpinang',
        image: '/desain/50C676A3-4FB9-4A65-A6D3-E2AD77C31F7B.png',
        specs: [
            { type: 'area', label: '36/84 m²' },
            { type: 'bed', label: '2 KT' },
            { type: 'bath', label: '1 KM' },
            { type: 'car', label: '1 Carport' },
        ],
        remaining: '0',
        status: 'soldout',
    },
];

// Minimalist Icons Component
const Icon = ({ type }: { type: string }) => {
    // Icons with thin strokes for minimalist look
    switch (type) {
        case 'area':
            return (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
            );
        case 'bed':
            return (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /> {/* Checkmark style minimalist or Bed? Let's use a real Bed icon or simple square */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            );
        case 'bath':
            return (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> {/* Replaced with Drop/Circle for simple bath feeling or Stick */}
                </svg>
            );
        // Let's use simpler standard icons for better clarity
        default: return null;
    }
};

// SVG Definitions for better consistency (Custom minimalist thin icons)
const Icons = {
    Area: () => (
        <svg className="w-4 h-4" style={{ color: '#0F2A4A' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
    ),
    Bed: () => (
        <svg className="w-4 h-4" style={{ color: '#0F2A4A' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 4v16" />
            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
            <path d="M2 17h20" />
            <path d="M6 8v9" />
        </svg>
    ),
    Bath: () => (
        <svg className="w-4 h-4" style={{ color: '#0F2A4A' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3 9 6" />
            <path d="M2 12h20" />
            <path d="M16 3 16 6" />
            <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
        </svg>
    ),
    Car: () => (
        <svg className="w-4 h-4" style={{ color: '#0F2A4A' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
            <path d="M7 15h.01" />
            <path d="M17 15h.01" />
        </svg>
    )
};


export default function PropertyShowcase() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="property" className="py-20 bg-[#F8FAFC]" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header - Corporate & Professional */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="block text-sm font-bold tracking-[0.2em] text-[#64748B] uppercase mb-2 font-sans">
                        Produk Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A4A] mb-4 tracking-tight uppercase font-sans">
                        Pilihan Hunian Terbaik
                    </h2>
                    <p className="text-base text-[#64748B] font-medium max-w-xl mx-auto font-sans">
                        Temukan rumah impian Anda dengan desain modern dan harga terjangkau
                    </p>
                </div>

                {/* Property Grid - Compact Corporate Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property, index) => (
                        <Link
                            key={property.id}
                            href={`/property/${property.id === 1 ? '12' : property.id === 2 ? '16' : '15'}`}
                            className={`group bg-white rounded border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Image - Plain, no badges */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={property.image}
                                    alt={property.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* "Lihat Detail" Arrow Overlay */}
                                <div className="absolute bottom-0 right-0 bg-[#0F2A4A] text-white py-1.5 px-3 rounded-tl-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    Lihat Detail
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Minimalist Compact Content */}
                            <div className="p-5 flex flex-col h-auto">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-[#0F2A4A] uppercase tracking-wide font-sans mb-1">
                                        {property.name}
                                    </h3>
                                    <p className="text-sm text-[#64748B] font-medium truncate">
                                        {property.location}
                                    </p>
                                </div>

                                {/* Specs Grid - Clean & Minimalist with Icons */}
                                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-5 border-t border-gray-100 pt-4">
                                    {property.specs.map((spec, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-[#475569]">
                                            {/* Render Icon based on index or type */}
                                            {spec.type === 'area' && <Icons.Area />}
                                            {spec.type === 'bed' && <Icons.Bed />}
                                            {spec.type === 'bath' && <Icons.Bath />}
                                            {spec.type === 'car' && <Icons.Car />}
                                            <span className="font-medium text-xs text-[#0F2A4A]">{spec.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Actions - Compact */}
                                <div className="mt-auto flex items-center justify-between gap-3">
                                    <div
                                        className={`flex-1 text-center py-2.5 rounded text-xs font-bold uppercase tracking-wide transition-colors ${property.status === 'soldout'
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-[#0F2A4A] text-white hover:bg-[#1B4570]'
                                            }`}
                                    >
                                        {property.status === 'soldout' ? 'Sold Out' : 'Booking'}
                                    </div>

                                    <div className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wide ${property.status === 'soldout'
                                        ? 'bg-red-50 text-red-600'
                                        : 'bg-green-50 text-green-700'
                                        }`}>
                                        {property.status === 'soldout' ? 'Habis' : `Sisa ${property.remaining}`}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Simple CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://wa.me/6281239325928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0F2A4A] font-bold text-sm hover:text-[#1B8DBA] transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-[#1B8DBA] pb-0.5"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Hubungi Kami via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
