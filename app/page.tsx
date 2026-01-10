'use client';

import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import Hero from '@/components/hero/Hero';
import Numbers from '@/components/numbers/Numbers';
import Outcome from '@/components/outcome/Outcome';
import Problems from '@/components/problems/Problems';
import Cases from '@/components/cases/Cases';
import Reviews from '@/components/reviews/Reviews';
import Who from '@/components/who/Who';
import Price from '@/components/price/Price';
import Agreements from '@/components/agreements/Agreements';
import Cta from '@/components/cta/Cta';
import Faq from '@/components/faq/Faq';
import Footer from '@/components/footer/Footer';

export default function Page() {
  useRevealOnScroll();

  return (
    <>
      <Hero />
      <Numbers />
      <Outcome />
      <Problems />
      <Cases />
      <Reviews />
      <Who />
      <Price />
      <Agreements />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
