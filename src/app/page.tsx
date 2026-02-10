import Hero from "@/components/hero";
import Concept from "@/components/concept";
import DiagnosisExplanation from "@/components/diagnosis-explanation";
import Profile from "@/components/profile";
import ServicePlans from "@/components/service-plans";
import Reviews from "@/components/reviews";
import FAQ from "@/components/faq";
import FirstTime from "@/components/first-time";
import Contact from "@/components/contact";
import PrivacyPolicyModal from "@/components/privacy-policy-modal";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background font-sans">
      <Hero />
      <div id="concept" className="scroll-mt-20">
        <Concept />
      </div>
      <div id="diagnosis" className="scroll-mt-20">
        <DiagnosisExplanation />
      </div>
      <div id="profile" className="scroll-mt-20">
        <Profile />
      </div>
      <div id="plans" className="scroll-mt-20">
        <ServicePlans />
      </div>
      <div id="reviews" className="scroll-mt-20">
        <Reviews />
      </div>
      <div id="faq" className="scroll-mt-20">
        <FAQ />
      </div>
      <FirstTime />
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>

      {/* Footer (Simple version for now) */}
      <footer className="py-12 bg-[#FFF5F7] border-t border-pink-100/50 text-center text-foreground/60 text-sm">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <PrivacyPolicyModal />
          <p className="font-serif tracking-wider">&copy; {new Date().getFullYear()} Poodle Glow. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
