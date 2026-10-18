import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import Services from "@/components/Services";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import WhyGlobalIT from "@/components/WhyGlobalIT";
import OurProcess from "@/components/OurProcess";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AnimatedCursor from "@/components/AnimatedCursor";

export default function Home() {
  return (
    <>
      <AnimatedCursor />
      <Navigation />
      <main id="main-content">
        <Hero />
        <TrustMetrics />
        <Services />
        <ProblemsWeSolve />
        <WhyGlobalIT />
        <OurProcess />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
