'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface Props {
  locale: string;
}

export default function ContactSection({ locale }: Props) {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!consent) {
      e.preventDefault();
      setConsentError(true);
      return;
    }
    setConsentError(false);
    setIsSubmitting(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-sky-500" />
              <span className="text-sky-600 text-sm font-semibold uppercase tracking-widest">
                {t('label')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('headline')}
            </h2>
            <p className="text-lg text-neutral-600 mb-10">{t('subheadline')}</p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">Email</p>
                  <a href={`mailto:${t('emailAddress')}`} className="text-neutral-900 font-medium hover:text-sky-600 transition-colors">
                    {t('emailAddress')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">
                    {locale === 'da' ? 'Telefon' : locale === 'pl' ? 'Telefon' : 'Phone'}
                  </p>
                  <a href={`tel:${t('phone')}`} className="text-neutral-900 font-medium hover:text-sky-600 transition-colors">
                    {t('phone')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">
                    {locale === 'da' ? 'Adresse' : locale === 'pl' ? 'Adres' : 'Address'}
                  </p>
                  <p className="text-neutral-900 font-medium">{t('address')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8">
            <form
              action="https://formsubmit.co/info@nordnutri.dk"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* FormSubmit config fields */}
              <input type="hidden" name="_subject" value="New inquiry from NordNutri.dk" />
              <input type="hidden" name="_next" value={`https://nordnutri.dk/${locale}/thank-you`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Honeypot anti-spam */}
              <input type="text" name="_honey" className="hidden" aria-hidden="true" />

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {t('nameLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder={t('namePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-neutral-900 placeholder-neutral-400"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {t('companyLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    required
                    placeholder={t('companyPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-neutral-900 placeholder-neutral-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {t('emailLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-neutral-900 placeholder-neutral-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {t('phoneLabel')}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder={t('phonePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-neutral-900 placeholder-neutral-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {t('messageLabel')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-neutral-900 placeholder-neutral-400 resize-none"
                  />
                </div>

                {/* GDPR consent */}
                <div>
                  <label className={`flex items-start gap-3 cursor-pointer ${consentError ? 'text-red-600' : 'text-neutral-600'}`}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (e.target.checked) setConsentError(false);
                      }}
                      className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-sky-600 focus:ring-sky-500"
                    />
                    <span className="text-sm leading-relaxed">
                      {t('consentLabel')} <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {consentError && (
                    <p className="text-red-500 text-xs mt-1 ml-7">
                      {locale === 'da'
                        ? 'Du skal acceptere for at fortsætte'
                        : locale === 'pl'
                        ? 'Musisz wyrazić zgodę, aby kontynuować'
                        : 'You must agree to continue'}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t('submitting')}
                    </>
                  ) : (
                    <>
                      {t('submit')}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
