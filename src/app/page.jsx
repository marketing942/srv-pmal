import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Solution from "@/components/Solution";
import ForWho from "@/components/ForWho";
import WhatYouGet from "@/components/WhatYouGet";
import Professor from "@/components/Professor";
import AboutCPPEM from "@/components/AboutCPPEM";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pain />
      <Solution />
      <ForWho />
      <WhatYouGet />
      <Professor />
      <AboutCPPEM />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
