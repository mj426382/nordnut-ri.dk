import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/config';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const alternates: Record<string, string> = {};
  for (const loc of locales) {
    alternates[loc] = `https://nordnutri.dk/${loc}`;
  }

  return {
    metadataBase: new URL('https://nordnutri.dk'),
    title: {
      default: t('homeTitle'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('homeDescription'),
    alternates: {
      canonical: `https://nordnutri.dk/${locale}`,
      languages: {
        da: 'https://nordnutri.dk/da',
        en: 'https://nordnutri.dk/en',
        pl: 'https://nordnutri.dk/pl',
        'x-default': 'https://nordnutri.dk/da',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'da' ? 'da_DK' : locale === 'en' ? 'en_US' : 'pl_PL',
      url: `https://nordnutri.dk/${locale}`,
      siteName: t('siteName'),
      title: t('homeTitle'),
      description: t('homeDescription'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDescription'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NordNutri.dk',
              url: 'https://nordnutri.dk',
              logo: 'https://nordnutri.dk/images/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+45-XX-XX-XX-XX',
                contactType: 'customer service',
                availableLanguage: ['Danish', 'English', 'Polish'],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
