import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import GallerySection from "../components/sections/GallerySection";
import WholesaleSection from "../components/sections/WholesaleSection";
import ContactSection from "../components/sections/ContactSection";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <WholesaleSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
