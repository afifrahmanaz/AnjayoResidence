'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, use } from 'react';

interface PropertyDetailProps {
    params: Promise<{ id: string }>;
}

const propertyData: { [key: string]: any } = {
    '12': {
        name: 'ANJAYO RESIDENCE 12',
        developer: 'PT. MARLINDO BANGUN PERSADA',
        idLokasi: 'AR-12-2026',
        address: 'Jl. Kerabut, Gerunggang, Tua Tunu, Kota Pangkalpinang, Bangka Belitung',
        status: {
            subsidi: { available: 1, sold: 14, progress: 0 },
            komersil: { available: 0, sold: 0, progress: 0 },
        },
        unitTypes: [
            {
                type: 'Tipe 36',
                price: 'Rp 168.000.000',
                buildingArea: '36 m²',
                landArea: '84 m²',
                bedrooms: 2,
                bathrooms: 1,
            },
        ],
        specifications: {
            atap: 'Genteng Metal / Beton',
            rangka: 'Rangka Atap Baja Ringan',
            plafon: 'Gypsum',
            dinding: 'Pasangan Bata + Plester + Cat',
            lantai: 'Keramik 40x40',
            pondasi: 'Batu Kali',
            kusen: 'Aluminium',
            sanitair: 'Closet Duduk',
            listrik: '1300 Watt',
            air: 'Sumur Bor',
        },
        images: ['/desain/50C676A3-4FB9-4A65-A6D3-E2AD77C31F7B.png'],
        siteplan: '/image.png',
        mapLink: 'https://www.google.com/maps/place/2%C2%B006\'01.9%22S+106%C2%B004\'30.0%22E/@-2.1004175,106.0743702,279m/data=!3m1!1e3!4m4!3m3!8m2!3d-2.1005136!4d106.0750106?hl=id&entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D',
        mapEmbed: 'https://maps.google.com/maps?q=-2.1005136,106.0750106&hl=id&z=17&output=embed',
    },
    '16': {
        name: 'ANJAYO RESIDENCE 16',
        developer: 'PT. MARLINDO BANGUN PERSADA',
        idLokasi: 'AR-16-2026',
        address: 'Jl. Jerambah Gantung, Gabek, Kota Pangkalpinang, Bangka Belitung',
        status: {
            subsidi: { available: 29, sold: 41, progress: 0 },
            komersil: { available: 0, sold: 0, progress: 0 },
        },
        unitTypes: [
            {
                type: 'Tipe 36',
                price: 'Rp 168.000.000',
                buildingArea: '36 m²',
                landArea: '84 m²',
                bedrooms: 2,
                bathrooms: 1,
            },
        ],
        specifications: {
            atap: 'Genteng Metal / Beton',
            rangka: 'Rangka Atap Baja Ringan',
            plafon: 'Gypsum',
            dinding: 'Pasangan Bata + Plester + Cat',
            lantai: 'Keramik 40x40',
            pondasi: 'Batu Kali',
            kusen: 'Aluminium',
            sanitair: 'Closet Duduk',
            listrik: '1300 Watt',
            air: 'Sumur Bor',
        },
        images: ['/desain/7668CB9F-16E4-41D4-8DBF-E47F50ABD486.png'],
        siteplan: '/image_copy_2.png',
        mapLink: 'https://www.google.com/maps?ll=-2.084091,106.095691&z=16&t=m&hl=id&gl=US&mapclient=embed&q=2%C2%B005%2702.7%22S+106%C2%B005%2744.5%22E+-2.084091,+106.095691@-2.0840911,106.0956906',
        mapEmbed: 'https://maps.google.com/maps?q=-2.084091,106.095691&hl=id&z=17&output=embed',
    },
    '15': {
        name: 'ANJAYO RESIDENCE 15',
        developer: 'PT. MARLINDO BANGUN PERSADA',
        idLokasi: 'AR-15-2026',
        address: 'Jl. Kerabut, Gerunggang, Tua Tunu, Kota Pangkalpinang, Bangka Belitung',
        status: {
            subsidi: { available: 0, sold: 70, progress: 0 },
            komersil: { available: 0, sold: 0, progress: 0 },
        },
        unitTypes: [
            {
                type: 'Tipe 36',
                price: 'Rp 168.000.000',
                buildingArea: '36 m²',
                landArea: '84 m²',
                bedrooms: 2,
                bathrooms: 1,
            },
        ],
        specifications: {
            atap: 'Genteng Metal / Beton',
            rangka: 'Rangka Atap Baja Ringan',
            plafon: 'Gypsum',
            dinding: 'Pasangan Bata + Plester + Cat',
            lantai: 'Keramik 40x40',
            pondasi: 'Batu Kali',
            kusen: 'Aluminium',
            sanitair: 'Closet Duduk',
            listrik: '1300 Watt',
            air: 'Sumur Bor',
        },
        images: ['/desain/8CB4F94B-A574-490C-A3FF-7CF52AB3D361.png'],
        siteplan: '/image_copy.png',
        mapLink: 'https://www.google.com/maps?ll=-2.108572,106.066148&z=16&t=m&hl=id&gl=US&mapclient=embed&q=2%C2%B006%2730.9%22S+106%C2%B003%2758.1%22E+-2.108572,+106.066148@-2.1085722,106.0661475',
        mapEmbed: 'https://maps.google.com/maps?q=-2.108572,106.066148&hl=id&z=17&output=embed',
    },
};

export default function PropertyDetail({ params }: PropertyDetailProps) {
    // Unwrap the params Promise using React.use()
    const { id } = use(params);

    const [activeTab, setActiveTab] = useState('profil');
    const property = propertyData[id];

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-[#0F2A4A] mb-4">Property Not Found</h1>
                    <Link href="/" className="text-[#1B8DBA] hover:underline">← Kembali ke Beranda</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Header */}
            <header className="bg-[#0F2A4A] text-white py-4 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 -ml-6">
                        <div className="relative w-12 h-12 overflow-visible">
                            <Image
                                src="/logo-final.png"
                                alt="Anjayo Logo"
                                fill
                                className="object-contain scale-[3.5] md:scale-[4.5] origin-left"
                            />
                        </div>
                    </Link>
                    <Link href="/" className="text-sm hover:text-[#1B8DBA] transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke Beranda
                    </Link>
                </div>
            </header>

            {/* Property Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#0F2A4A] uppercase mb-2">{property.name}</h1>
                    <p className="text-sm text-[#64748B] font-semibold uppercase mb-1">{property.developer}</p>
                    <p className="text-sm text-[#64748B]">ID Lokasi: {property.idLokasi}</p>
                    <p className="text-sm text-[#64748B] mt-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {property.address}
                    </p>
                </div>
            </div>

            {/* Status Panel */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
                    <h3 className="text-sm font-bold text-[#0F2A4A] uppercase tracking-wide mb-4">Status Unit</h3>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4">
                        <div className="bg-yellow-50 border border-yellow-200 rounded p-2 md:p-4 text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#0F2A4A]">{property.status.subsidi.available}</div>
                            <div className="text-xs text-[#64748B] uppercase font-semibold mt-1">Tersedia</div>
                            <div className="text-[10px] text-[#64748B]">Subsidi</div>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded p-2 md:p-4 text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#0F2A4A]">{property.status.subsidi.sold}</div>
                            <div className="text-xs text-[#64748B] uppercase font-semibold mt-1">Terjual</div>
                            <div className="text-[10px] text-[#64748B]">Subsidi</div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded p-2 md:p-4 text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#0F2A4A]">{property.status.subsidi.progress}</div>
                            <div className="text-xs text-[#64748B] uppercase font-semibold mt-1">Proses</div>
                            <div className="text-[10px] text-[#64748B]">Subsidi</div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded p-2 md:p-4 text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#0F2A4A]">{property.status.komersil.available}</div>
                            <div className="text-xs text-[#64748B] uppercase font-semibold mt-1">Tersedia</div>
                            <div className="text-[10px] text-[#64748B]">Komersil</div>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded p-2 md:p-4 text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#0F2A4A]">{property.status.komersil.sold}</div>
                            <div className="text-xs text-[#64748B] uppercase font-semibold mt-1">Terjual</div>
                            <div className="text-[10px] text-[#64748B]">Komersil</div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded p-2 md:p-4 text-center">
                            <div className="text-2xl font-bold text-[#0F2A4A]">{property.status.komersil.progress}</div>
                            <div className="text-xs text-[#64748B] uppercase font-semibold mt-1">Proses</div>
                            <div className="text-[10px] text-[#64748B]">Komersil</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex gap-1">
                        <button
                            onClick={() => setActiveTab('profil')}
                            className={`px-4 py-3 md:px-6 md:py-4 font-bold text-xs md:text-sm uppercase tracking-wide transition-colors ${activeTab === 'profil'
                                ? 'bg-[#0F2A4A] text-white'
                                : 'text-[#64748B] hover:bg-gray-100'
                                }`}
                        >
                            Profil
                        </button>
                        <button
                            onClick={() => setActiveTab('siteplan')}
                            className={`px-4 py-3 md:px-6 md:py-4 font-bold text-xs md:text-sm uppercase tracking-wide transition-colors ${activeTab === 'siteplan'
                                ? 'bg-[#0F2A4A] text-white'
                                : 'text-[#64748B] hover:bg-gray-100'
                                }`}
                        >
                            Siteplan Digital
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                {activeTab === 'profil' && (
                    <div className="space-y-8">
                        {/* Map & Gallery */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded border border-gray-200 p-4 md:p-6">
                                <h3 className="text-lg font-bold text-[#0F2A4A] uppercase mb-4">Lokasi</h3>
                                <div className="aspect-video bg-gray-100 rounded overflow-hidden relative group shadow-inner">
                                    {property.mapEmbed ? (
                                        <>
                                            <iframe
                                                src={property.mapEmbed}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                className="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-500"
                                            ></iframe>
                                            <a
                                                href={property.mapLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold text-[#0F2A4A] rounded-lg shadow-lg hover:bg-[#1B8DBA] hover:text-white transition-all transform hover:scale-105 flex items-center gap-2"
                                            >
                                                <span>Buka Maps</span>
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </>
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="text-center text-[#64748B]">
                                                <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                                <p className="text-sm font-medium">Google Maps</p>
                                                <p className="text-xs">Coming Soon</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="bg-white rounded border border-gray-200 p-4 md:p-6">
                                <h3 className="text-lg font-bold text-[#0F2A4A] uppercase mb-4">Galeri</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {property.images.map((img: string, idx: number) => (
                                        <div key={idx} className="aspect-video relative bg-gray-100 rounded overflow-hidden">
                                            <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Unit Types */}
                        <div className="bg-white rounded border border-gray-200 p-4 md:p-6">
                            <h3 className="text-lg font-bold text-[#0F2A4A] uppercase mb-6">Tipe Rumah</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {property.unitTypes.map((unit: any, idx: number) => (
                                    <div key={idx} className="border border-gray-200 rounded p-3 md:p-5 hover:border-[#0F2A4A] transition-colors">
                                        <h4 className="font-bold text-[#0F2A4A] text-base md:text-lg mb-2 md:mb-3">{unit.type}</h4>
                                        <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-[#64748B]">Harga:</span>
                                                <span className="font-bold text-[#1B8DBA]">{unit.price}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#64748B]">Luas Bangunan:</span>
                                                <span className="font-semibold">{unit.buildingArea}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#64748B]">Luas Tanah:</span>
                                                <span className="font-semibold">{unit.landArea}</span>
                                            </div>
                                            <div className="flex gap-4 mt-3 pt-3 border-t">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-[#1B8DBA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                    </svg>
                                                    <span className="text-xs font-semibold">{unit.bedrooms} KT</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-[#1B8DBA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                                    </svg>
                                                    <span className="text-xs font-semibold">{unit.bathrooms} KM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="bg-white rounded border border-gray-200 p-4 md:p-6">
                            <h3 className="text-lg font-bold text-[#0F2A4A] uppercase mb-6">Spesifikasi Teknis</h3>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {Object.entries(property.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between py-2 md:py-3 border-b border-gray-100">
                                        <span className="text-xs md:text-sm font-semibold text-[#64748B] uppercase">{key}:</span>
                                        <span className="text-xs md:text-sm font-medium text-[#0F2A4A]">{value as string}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'siteplan' && (
                    <div className="grid lg:grid-cols-4 gap-6">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-4">
                            <div className="bg-white rounded border border-gray-200 p-5">
                                <h4 className="font-bold text-[#0F2A4A] text-sm uppercase mb-4">Informasi</h4>
                                <div className="space-y-2 text-xs">
                                    <div>
                                        <div className="text-[#64748B] font-semibold">Nama:</div>
                                        <div className="text-[#0F2A4A] font-medium">{property.name}</div>
                                    </div>
                                    <div>
                                        <div className="text-[#64748B] font-semibold">ID:</div>
                                        <div className="text-[#0F2A4A] font-medium">{property.idLokasi}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded border border-gray-200 p-5">
                                <h4 className="font-bold text-[#0F2A4A] text-sm uppercase mb-4">Legenda</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-4 h-4 bg-yellow-400 border border-yellow-600"></div>
                                        <span>Tersedia</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-4 h-4 bg-red-500 border border-red-700"></div>
                                        <span>Terjual</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-4 h-4 bg-green-500 border border-green-700"></div>
                                        <span>Ready Stock</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-4 h-4 bg-gray-400 border border-gray-600"></div>
                                        <span>Proses</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded border border-gray-200 p-5">
                                <h4 className="font-bold text-[#0F2A4A] text-sm uppercase mb-4">Filter</h4>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#64748B] mb-1">Blok</label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded text-sm">
                                            <option>Semua Blok</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#64748B] mb-1">Tipe Rumah</label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded text-sm">
                                            <option>Filter tipe rumah</option>
                                            <option>Tipe 36</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Siteplan Canvas */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded border border-gray-200 p-4 md:p-6 min-h-[300px] md:min-h-[500px] flex items-center justify-center relative bg-gray-50">
                                <img
                                    src={property.siteplan}
                                    alt="Siteplan Interactive"
                                    className="w-full h-full object-contain max-h-[600px]"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Footer */}
            <div className="bg-[#0F2A4A] text-white py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">Tertarik dengan {property.name}?</h3>
                    <p className="text-white/80 mb-6">Hubungi kami sekarang untuk informasi lebih lanjut dan booking unit</p>
                    <a
                        href="https://wa.me/6281239325928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md font-bold hover:bg-[#20BD5C] transition-all"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Hubungi via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
