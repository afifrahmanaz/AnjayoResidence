import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjayo Residence",
  description: "Perumahan Premium dengan harga terjangkau. DP 0%, Cashback 3 Juta, Cicilan mulai Rp 902rb/bulan. Lokasi strategis di Kerabut, Pangkalpinang.",
  keywords: "perumahan pangkalpinang, KPR subsidi, rumah murah, anjayo residence, rumah DP 0, perumahan kerabut",
  authors: [{ name: "PT. Marlindo Bangun Persada" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
