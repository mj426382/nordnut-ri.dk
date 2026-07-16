import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyDenmarkSection from '@/components/WhyDenmarkSection';
import WhyNordnutriSection from '@/components/WhyNordnutriSection';
import ProcessSection from '@/components/ProcessSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import { locales } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <HeroSection locale={locale} />
      <AboutSection />
      <ServicesSection />
      <WhyDenmarkSection />
      <WhyNordnutriSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection locale={locale} />
    </>
  );
}
