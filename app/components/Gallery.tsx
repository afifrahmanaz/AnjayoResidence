'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const galleryItems = [
    { id: 1, image: '/desain/C0B32BCD-46A5-4284-BD5F-475F073E5363.png', title: 'Anjayo 15' },
    { id: 2, image: '/desain/AC266E6D-DB44-48AE-AEE9-00DF7DFCACD7.png', title: 'Type 36/84' },
    { id: 3, image: '/desain/50C676A3-4FB9-4A65-A6D3-E2AD77C31F7B.png', title: 'Anjayo 16' },
    { id: 4, image: '/desain/7668CB9F-16E4-41D4-8DBF-E47F50ABD486.png', title: 'Subsidi' },
    // { id: 5, image: '/desain/8CB4F94B-A574-490C-A3FF-7CF52AB3D361.png', title: 'Impian' }, // Reduce to 4 for even grid or keep 6? Let's use 6 for better grid. I'll duplicate one unique if needed or just use 4. Let's stick to 4 clean quality images for "compact" request before. Or 6.
    { id: 6, image: '/desain/E20EEBA1-879A-4F87-B9C5-CC63E0A6A51B.png', title: 'Layout' },
    { id: 5, image: '/desain/8CB4F94B-A574-490C-A3FF-7CF52AB3D361.png', title: 'Impian' },
];

export default function Gallery() {
    const [lightbox, setLightbox] = useState<string | null>(null);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <>
            <section id="gallery" className="py-20 lg:py-28 bg-white" ref={ref}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    {/* Header - Corporate Style */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="block text-sm font-bold tracking-[0.2em] text-[#64748B] uppercase mb-2 font-sans">
                            Gallery
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A4A] mb-4 tracking-tight uppercase font-sans">
                            Koleksi Foto Properti
                        </h2>
                        <p className="text-base text-[#64748B] font-medium max-w-xl mx-auto font-sans">
                            Lihat desain modern dan elegan dari Anjayo Residence
                        </p>
                    </div>

                    {/* Gallery Grid - Clean & Corporate */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`group relative rounded-md overflow-hidden cursor-pointer bg-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 aspect-square border-4 border-white ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                                style={{ transitionDelay: `${index * 80}ms` }}
                                onClick={() => setLightbox(item.image)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay - minimalist */}
                                <div className="absolute inset-0 bg-[#0F2A4A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-[#0F2A4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Instagram CTA - Corporate */}
                    <div className="text-center mt-12">
                        <a
                            href="https://instagram.com/anjayo_residence"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#0F2A4A] font-bold text-sm hover:text-[#1B8DBA] transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-[#1B8DBA] pb-0.5"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Ikuti @anjayo_residence
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn" onClick={() => setLightbox(null)}>
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl" onClick={() => setLightbox(null)}>✕</button>
                    <Image src={lightbox} alt="Gallery" width={1100} height={700} className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    );
}
