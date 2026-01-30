'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const waMessage = `*ANJAYO RESIDENCE*\n\nNama: ${formData.name}\nHP: ${formData.phone}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
        window.open(`https://wa.me/6281239325928?text=${encodeURIComponent(waMessage)}`, '_blank');
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden" ref={ref}>
            {/* Background Pattern - Subtle */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1B8DBA]/5 skew-x-12 transform origin-top-right z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F2A4A]/5 rounded-full blur-3xl z-0" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header - Corporate Style */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="block text-sm font-bold tracking-[0.2em] text-[#64748B] uppercase mb-2 font-sans">
                        Kontak
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A4A] mb-4 tracking-tight uppercase font-sans">
                        Hubungi Kami
                    </h2>
                    <p className="text-base text-[#64748B] font-medium max-w-xl mx-auto font-sans">
                        Kami siap membantu Anda mewujudkan hunian impian. Jangan ragu untuk berkonsultasi.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Info Cards (2/5 column) */}
                    <div className={`lg:col-span-2 space-y-6 transition-all duration-600 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        {/* Office Card */}
                        <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#0F2A4A]/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500 ease-out" />
                            <h4 className="font-bold text-[#0F2A4A] uppercase tracking-wide text-sm mb-3 font-sans">Kantor Pemasaran</h4>
                            <p className="text-[#64748B] text-sm leading-relaxed relative z-10">
                                Jl. Kerabut, Kota Pangkalpinang<br />
                                (Depan Sekolah Al Azhar)
                            </p>
                        </div>

                        {/* Contact Channels */}
                        <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
                            <h4 className="font-bold text-[#0F2A4A] uppercase tracking-wide text-sm mb-4 font-sans">Layanan Pelanggan</h4>
                            <div className="space-y-4">
                                <a href="tel:081239325928" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#0F2A4A] group-hover:bg-[#0F2A4A] group-hover:text-white transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#94A3B8] font-semibold uppercase">Telepon</p>
                                        <p className="text-[#0F2A4A] font-medium text-sm">0812.3932.5928</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/6281239325928" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#0F2A4A] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#94A3B8] font-semibold uppercase">WhatsApp</p>
                                        <p className="text-[#0F2A4A] font-medium text-sm">Chat Admin (24 Jam)</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-[#0F2A4A] p-6 rounded-md shadow-lg text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl -mr-10 -mt-10" />
                            <h4 className="font-bold uppercase tracking-wide text-sm mb-2 font-sans flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                Jam Operasional
                            </h4>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Senin - Sabtu: 08.00 - 17.00 WIB<br />
                                Minggu: Hubungi Kami
                            </p>
                        </div>
                    </div>

                    {/* Form (3/5 column) */}
                    <div className={`lg:col-span-3 transition-all duration-600 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="bg-white rounded-md p-8 lg:p-10 shadow-xl border-t-4 border-[#0F2A4A]">
                            <h3 className="text-2xl font-bold text-[#0F2A4A] mb-8 font-sans">Kirim Pesan</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase text-[#64748B] mb-2 tracking-wide group-focus-within:text-[#0F2A4A] transition-colors">Nama Lengkap</label>
                                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-[#F8FAFC] border-b-2 border-[#E2E8F0] focus:border-[#0F2A4A] outline-none transition-all text-sm font-medium placeholder-gray-400 hover:bg-white" placeholder="Nama Anda" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase text-[#64748B] mb-2 tracking-wide group-focus-within:text-[#0F2A4A] transition-colors">WhatsApp</label>
                                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-[#F8FAFC] border-b-2 border-[#E2E8F0] focus:border-[#0F2A4A] outline-none transition-all text-sm font-medium placeholder-gray-400 hover:bg-white" placeholder="08xx-xxxx-xxxx" />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-bold uppercase text-[#64748B] mb-2 tracking-wide group-focus-within:text-[#0F2A4A] transition-colors">Email</label>
                                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-[#F8FAFC] border-b-2 border-[#E2E8F0] focus:border-[#0F2A4A] outline-none transition-all text-sm font-medium placeholder-gray-400 hover:bg-white" placeholder="email@example.com" />
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-bold uppercase text-[#64748B] mb-2 tracking-wide group-focus-within:text-[#0F2A4A] transition-colors">Pesan</label>
                                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-[#F8FAFC] border-b-2 border-[#E2E8F0] focus:border-[#0F2A4A] outline-none transition-all resize-none text-sm font-medium placeholder-gray-400 hover:bg-white" placeholder="Saya tertarik dengan Anjayo Residence..." />
                                </div>
                                <div className="pt-2">
                                    <button type="submit" className="w-full bg-[#0F2A4A] text-white py-4 rounded font-bold text-sm tracking-widest uppercase hover:bg-[#1B4570] transition-all hover:shadow-lg transform hover:-translate-y-1">
                                        Kirim Pesan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
