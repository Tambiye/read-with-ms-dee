import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatsAppButton from "@/components/WhatsAppButton";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
          <WhatsAppButton />
       
      </main>

      <Footer />
    </>
  );
}