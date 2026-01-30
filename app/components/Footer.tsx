import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0F2A4A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        {/* Logo di atas - Style disamakan dengan Header */}
                        <Link href="/" className="block mb-2 mt-2 -ml-6 overflow-visible">
                            <div className="relative w-12 h-12 overflow-visible">
                                <Image
                                    src="/logo-final.png"
                                    alt="Anjayo Logo"
                                    fill
                                    className="object-contain scale-[4] origin-left"
                                />
                            </div>
                        </Link>
                        {/* Text di bawah logo */}
                        <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-sm mt-8">
                            Perumahan premium dengan harga terjangkau di lokasi strategis Pangkalpinang.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://instagram.com/anjayo_residence" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#E4405F]/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/6281239325928" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#25D366]/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 text-[#1B8DBA]">Menu</h4>
                        <ul className="space-y-2.5">
                            {['Produk Kami', 'Fasilitas', 'Gallery', 'Kontak'].map((link) => (
                                <li key={link}><Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-white text-sm transition-colors">{link}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 text-[#1B8DBA]">Lokasi</h4>
                        <p className="text-white/60 text-sm leading-relaxed mb-3">Jl. Kerabut, Kota Pangkalpinang<br />Bangka Belitung</p>
                        <p className="text-white/60 text-sm"><span className="text-white">Developer:</span><br />PT. Marlindo Bangun Persada</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
                    <p className="text-white/40 text-xs">&copy; 2026 Anjayo Residence. All rights reserved.</p>
                    <p className="text-white/30 text-xs">Designed for affordable luxury living</p>
                </div>
            </div>
        </footer>
    );
}
