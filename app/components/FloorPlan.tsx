'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function FloorPlan() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section className="py-20 lg:py-28 bg-[#F8FAFC]" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image - Clean Layout Only */}
                    <div
                        className={`relative transition-all duration-600 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    >
                        <div className="relative rounded-md overflow-hidden shadow-xl bg-white border-4 border-white">
                            <Image
                                src="/desain/baru.png"
                                alt="Denah Anjayo Residence"
                                width={700}
                                height={700}
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Content - Corporate Style */}
                    <div
                        className={`transition-all duration-600 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                        <span className="block text-sm font-bold tracking-[0.2em] text-[#64748B] uppercase mb-2 font-sans">
                            Denah Bangunan
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A4A] mb-4 tracking-tight uppercase font-sans">
                            Layout Bangunan
                        </h2>
                        <p className="text-base text-[#64748B] leading-relaxed mb-8 font-sans font-medium">
                            Rumah Anjayo dirancang dengan desain minimalis yang elegan. Setiap ruang dioptimalkan untuk efisiensi dan fungsionalitas. Ruang keluarga luas untuk kenyamanan tinggal bersama.
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white border border-gray-200 rounded p-5 text-[#0F2A4A] text-center hover:border-[#0F2A4A] transition-colors">
                                <p className="text-3xl font-black mb-1">36m²</p>
                                <p className="text-[#64748B] text-xs uppercase tracking-widest font-bold">Luas Bangunan</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded p-5 text-[#0F2A4A] text-center hover:border-[#0F2A4A] transition-colors">
                                <p className="text-3xl font-black mb-1">84m²</p>
                                <p className="text-[#64748B] text-xs uppercase tracking-widest font-bold">Luas Tanah</p>
                            </div>
                        </div>

                        {/* Simple CTA */}
                        <a
                            href="https://wa.me/6281239325928"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#0F2A4A] font-bold text-sm hover:text-[#1B8DBA] transition-colors uppercase tracking-wide border-b-2 border-[#0F2A4A] hover:border-[#1B8DBA] pb-0.5"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
