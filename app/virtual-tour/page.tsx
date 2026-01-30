'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VirtualTour from '../components/VirtualTour';
import FloatingButtons from '../components/FloatingButtons';

export default function VirtualTourPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div>
                <VirtualTour />
            </div>
            <Footer />
            <FloatingButtons />
        </main>
    );
}
