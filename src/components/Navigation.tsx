'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const localeNames: Record<string, string> = {
  da: 'DA',
  en: 'EN',
  pl: 'PL',
};

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLocaleHref = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/') || `/${newLocale}`;
  };

  const navLinks = [
    { href: `/${locale}#about`, label: t('about') },
    { href: `/${locale}#services`, label: t('services') },
    { href: `/${locale}#why-denmark`, label: t('whyDenmark') },
    { href: `/${locale}#faq`, label: t('faq') },
    { href: `/${locale}#contact`, label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
              NordNutri<span className="text-emerald-500">.dk</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  isScrolled ? 'text-neutral-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: lang switcher + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${
                  isScrolled
                    ? 'text-neutral-600 hover:bg-neutral-100'
                    : 'text-white/90 hover:bg-white/10'
                }`}
                aria-label="Switch language"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {localeNames[locale]}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-neutral-100 py-1 min-w-[100px] z-50">
                  {Object.entries(localeNames).map(([loc, name]) => (
                    <Link
                      key={loc}
                      href={getLocaleHref(loc)}
                      onClick={() => setIsLangOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-neutral-50 transition-colors ${
                        loc === locale ? 'text-emerald-600 font-semibold' : 'text-neutral-700'
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href={`/${locale}#contact`}
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t('startCooperation')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-neutral-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2.5 text-neutral-700 font-medium hover:text-emerald-600 hover:bg-neutral-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-neutral-100 mt-2 pt-2 px-4">
                <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wider">Language</p>
                <div className="flex gap-2">
                  {Object.entries(localeNames).map(([loc, name]) => (
                    <Link
                      key={loc}
                      href={getLocaleHref(loc)}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        loc === locale
                          ? 'bg-emerald-600 text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-4 pt-2">
                <a
                  href={`/${locale}#contact`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-emerald-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  {t('startCooperation')}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
