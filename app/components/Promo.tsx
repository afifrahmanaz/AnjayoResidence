'use client';

import { useInView } from 'react-intersection-observer';

const promoItems = [
    { icon: '🎁', title: 'DP 0%', description: 'Tanpa uang muka' },
    { icon: '💰', title: 'Booking 1JT', description: 'Booking fee terjangkau' },
    { icon: '🏆', title: 'Cashback 3JT', description: 'Langsung potong harga' },
    { icon: '📋', title: 'FREE Biaya', description: 'Tidak ada biaya tersembunyi' },
];

export default function Promo() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section className="py-20 lg:py-28 bg-[#0F2A4A] relative overflow-hidden" ref={ref}>
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#1B8DBA]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1B8DBA]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <div
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-14 text-center transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#1B8DBA] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        <span>🔥</span> Promo Terbatas
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Promo Khusus Akhir Tahun
                    </h2>
                    <p className="text-base text-white/70 max-w-xl mx-auto mb-10">
                        Periode berlaku sampai <span className="font-bold text-[#1B8DBA]">31 Desember 2025</span>
                    </p>

                    {/* Promo Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {promoItems.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white/5 border border-white/10 rounded-lg p-5 transition-all duration-400 hover:bg-white/10 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                style={{ transitionDelay: `${(index + 2) * 80}ms` }}
                            >
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="text-[#1B8DBA] font-bold text-lg mb-1">{item.title}</h3>
                                <p className="text-white/60 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Urgency */}
                    <div className="bg-[#1B8DBA]/20 border border-[#1B8DBA]/30 rounded-lg p-4 mb-8 inline-block">
                        <p className="text-white/90 text-sm">
                            ⏰ Sudah <span className="font-bold text-[#1B8DBA]">50+ unit</span> terjual bulan ini!
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://wa.me/6281239325928?text=Halo,%20saya%20tertarik%20dengan%20promo%20Anjayo%20Residence"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#1B8DBA] text-white px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-[#147396] transition-all"
                        >
                            Dapatkan Promo Ini
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="tel:081239325928"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-white/20 transition-all"
                        >
                            📞 Telepon Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
