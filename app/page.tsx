import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyShowcase from './components/PropertyShowcase';
import Facilities from './components/Facilities';
import FloorPlan from './components/FloorPlan';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PropertyShowcase />
      <Facilities />
      <FloorPlan />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
