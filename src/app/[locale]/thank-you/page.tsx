import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
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
    title: t('contactTitle'),
    description: t('contactDescription'),
    robots: { index: false },
  };
}

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'thanks' });

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">{t('headline')}</h1>
        <p className="text-lg text-neutral-600 mb-8">{t('body')}</p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          ← {t('back')}
        </Link>
      </div>
    </section>
  );
}
