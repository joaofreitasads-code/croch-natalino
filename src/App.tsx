import { useState, useEffect } from 'react';
import { CollectionMode } from './types';
import { HeroSection } from './components/HeroSection';
import { RecipeStructureSection } from './components/RecipeStructureSection';
import { RecipeGallerySection } from './components/RecipeGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { EarningsSection } from './components/EarningsSection';
import { OpportunitySection } from './components/OpportunitySection';
import { BonusSection } from './components/BonusSection';
import { ForWhomSection } from './components/ForWhomSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [currentMode, setCurrentMode] = useState<CollectionMode>('natalino');
  const [showStickyCta, setShowStickyCta] = useState(false);

  const scrollToPricing = () => {
    const el = document.getElementById('Ancora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const pricingEl = document.getElementById('Ancora');
      if (!pricingEl) return;
      
      const pricingPos = pricingEl.offsetTop;
      // Show sticky CTA if scrolled past 500px and not yet into pricing section
      if (scrollPos > 500 && Math.abs(scrollPos - pricingPos) > 400) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-assistant bg-[#f5f1e8] text-neutral-900 selection:bg-amber-300">
      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection mode={currentMode} onCtaClick={scrollToPricing} />

        {/* 2. Recipe Structure (Cada receita em 3 ou 4 páginas) */}
        <RecipeStructureSection mode={currentMode} onCtaClick={scrollToPricing} />

        {/* 3. Included Recipes (Peças que você pode produzir) */}
        <RecipeGallerySection mode={currentMode} onCtaClick={scrollToPricing} />

        {/* 4. Benefits Grid (Mesmo sem ser avançada no crochê você vai...) */}
        <BenefitsGrid mode={currentMode} onCtaClick={scrollToPricing} />

        {/* 5. Earnings Potential (Quanto você pode faturar) */}
        <EarningsSection mode={currentMode} onCtaClick={scrollToPricing} />

        {/* 6. Opportunity Window (Você não precisa...) */}
        <OpportunitySection mode={currentMode} onCtaClick={scrollToPricing} />

        {/* 7. 5 Exclusive Bonuses */}
        <BonusSection mode={currentMode} onCtaClick={scrollToPricing} />

        {/* 8. For Whom is this Material */}
        <ForWhomSection mode={currentMode} />

        {/* 9. Testimonials (Veja o que estão falando Sobre Nosso Material) */}
        <TestimonialsSection />

        {/* 10. Pricing & Checkout Plans (id="Ancora") */}
        <PricingSection mode={currentMode} />

        {/* 11. 30 Days Guarantee */}
        <GuaranteeSection onCtaClick={scrollToPricing} />

        {/* 12. FAQ Accordion */}
        <FaqSection onCtaClick={scrollToPricing} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Button on Mobile */}
      {showStickyCta && (
        <div className="fixed bottom-3 left-4 right-4 z-40 sm:hidden transition-all duration-300 transform translate-y-0">
          <button
            onClick={scrollToPricing}
            className="w-full py-3.5 px-4 bg-[#008735] hover:bg-[#00bf63] text-white font-abeezee font-extrabold text-base rounded-full shadow-2xl border-2 border-white flex items-center justify-center gap-2 cursor-pointer animate-pulse-zoom"
          >
            <ShoppingBag className="w-5 h-5 text-yellow-300" />
            QUERO AS RECEITAS COM DESCONTO
          </button>
        </div>
      )}
    </div>
  );
}
