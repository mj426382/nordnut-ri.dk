import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-white text-lg">
                NordNutri<span className="text-sky-400">.dk</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
            <p className="text-neutral-500 text-xs mt-4">{t('madeWith')}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {[
                { href: '#about', label: nav('about') },
                { href: '#services', label: nav('services') },
                { href: '#why-denmark', label: nav('whyDenmark') },
                { href: '#faq', label: nav('faq') },
                { href: '#contact', label: nav('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-sky-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('legal')}
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <span className="text-neutral-500 text-sm cursor-not-allowed">{t('privacy')}</span>
              </li>
              <li>
                <span className="text-neutral-500 text-sm cursor-not-allowed">{t('terms')}</span>
              </li>
            </ul>
            <div className="flex gap-2">
              {(['da', 'en', 'pl'] as const).map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  className="px-2.5 py-1 rounded text-xs font-medium bg-neutral-800 text-neutral-400 hover:bg-sky-600 hover:text-white transition-colors uppercase"
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            {t('copyright').replace('{year}', String(year))}
          </p>
          <div className="flex items-center gap-1 text-neutral-600 text-xs">
            <span>NordNutri.dk</span>
            <span>·</span>
            <a href="mailto:info@nordnutri.dk" className="hover:text-neutral-400 transition-colors">
              info@nordnutri.dk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
