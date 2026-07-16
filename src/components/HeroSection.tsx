import { useTranslations } from 'next-intl';

interface Props {
  locale: string;
}

function SupplementIllustration() {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full drop-shadow-xl"
    >
      {/* Soft background circles */}
      <circle cx="260" cy="240" r="215" fill="#bae6fd" fillOpacity="0.25" />
      <circle cx="260" cy="240" r="155" fill="#e0f2fe" fillOpacity="0.35" />

      {/* Main tall bottle – sky blue */}
      <rect x="175" y="128" width="78" height="215" rx="13" fill="#0ea5e9" />
      <rect x="187" y="103" width="53" height="32" rx="7" fill="#0284c7" />
      <rect x="184" y="88" width="59" height="20" rx="8" fill="#86BA80" />
      {/* label panel */}
      <rect x="175" y="172" width="78" height="85" rx="4" fill="white" fillOpacity="0.22" />
      <rect x="183" y="182" width="52" height="5" rx="2" fill="white" fillOpacity="0.65" />
      <rect x="183" y="195" width="42" height="4" rx="2" fill="white" fillOpacity="0.42" />
      <rect x="183" y="206" width="46" height="4" rx="2" fill="white" fillOpacity="0.42" />
      <rect x="183" y="217" width="36" height="4" rx="2" fill="white" fillOpacity="0.42" />
      {/* shine */}
      <rect x="208" y="128" width="14" height="215" rx="7" fill="white" fillOpacity="0.08" />

      {/* Right bottle – pistachio */}
      <rect x="278" y="163" width="68" height="180" rx="11" fill="#86BA80" />
      <rect x="287" y="143" width="48" height="26" rx="6" fill="#6aa069" />
      <rect x="285" y="130" width="52" height="17" rx="7" fill="#0ea5e9" />
      <rect x="278" y="205" width="68" height="70" rx="4" fill="white" fillOpacity="0.22" />
      <rect x="285" y="215" width="44" height="4" rx="2" fill="white" fillOpacity="0.65" />
      <rect x="285" y="226" width="36" height="4" rx="2" fill="white" fillOpacity="0.42" />
      <rect x="303" y="163" width="12" height="180" rx="6" fill="white" fillOpacity="0.08" />

      {/* Left small jar */}
      <rect x="112" y="198" width="54" height="145" rx="10" fill="#7dd3fc" />
      <rect x="109" y="180" width="60" height="23" rx="7" fill="#38bdf8" />
      <rect x="115" y="169" width="42" height="15" rx="6" fill="#86BA80" />
      <rect x="112" y="228" width="54" height="58" rx="4" fill="white" fillOpacity="0.22" />
      <rect x="118" y="238" width="36" height="4" rx="2" fill="white" fillOpacity="0.65" />
      <rect x="118" y="249" width="28" height="4" rx="2" fill="white" fillOpacity="0.42" />
      <rect x="128" y="198" width="10" height="145" rx="5" fill="white" fillOpacity="0.08" />

      {/* Floating capsules top-right */}
      <g transform="rotate(-38 392 148)">
        <rect x="368" y="138" width="48" height="20" rx="10" fill="#bae6fd" />
        <rect x="368" y="138" width="24" height="20" rx="10" fill="#86BA80" fillOpacity="0.75" />
      </g>
      <g transform="rotate(22 398 295)">
        <rect x="374" y="286" width="44" height="18" rx="9" fill="#0ea5e9" fillOpacity="0.65" />
        <rect x="374" y="286" width="22" height="18" rx="9" fill="#7dd3fc" />
      </g>
      <g transform="rotate(-55 390 230)">
        <rect x="368" y="222" width="38" height="16" rx="8" fill="#86BA80" fillOpacity="0.55" />
        <rect x="368" y="222" width="19" height="16" rx="8" fill="#e0f2fe" />
      </g>

      {/* Top-left circle accent */}
      <circle cx="128" cy="152" r="18" fill="#bae6fd" fillOpacity="0.55" />
      <circle cx="128" cy="152" r="9" fill="#86BA80" fillOpacity="0.45" />

      {/* Bottom waves */}
      <path d="M75 402 Q155 380 225 398 Q295 416 368 398 Q432 382 485 402" stroke="#0ea5e9" strokeOpacity="0.28" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M68 420 Q152 400 225 416 Q295 432 368 416 Q435 400 492 420" stroke="#86BA80" strokeOpacity="0.22" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Sparkle top-right */}
      <path d="M426 112 L429 124 L441 127 L429 130 L426 142 L423 130 L411 127 L423 124 Z" fill="#0ea5e9" fillOpacity="0.45" />
      {/* Sparkle left */}
      <path d="M100 282 L102 290 L110 292 L102 294 L100 302 L98 294 L90 292 L98 290 Z" fill="#86BA80" fillOpacity="0.4" />
      {/* Small dots decoration */}
      <circle cx="420" cy="330" r="5" fill="#bae6fd" fillOpacity="0.6" />
      <circle cx="432" cy="345" r="3" fill="#86BA80" fillOpacity="0.45" />
      <circle cx="96" cy="350" r="4" fill="#0ea5e9" fillOpacity="0.35" />
    </svg>
  );
}

export default function HeroSection({ locale }: Props) {
  const t = useTranslations('hero');

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 45%, #eef7eb 100%)',
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #bae6fd 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[520px] h-[520px] bg-sky-100/60 rounded-full blur-3xl -translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#eef7eb]/70 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="max-w-xl">
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              <span className="text-sky-700 text-sm font-medium">{t('tagline')}</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              {t('headline')}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-600 mb-10 leading-relaxed">
              {t('subheadline')}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={`/${locale}#contact`}
                className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-0.5 text-base"
              >
                {t('cta1')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={`/${locale}#contact`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-neutral-800 font-semibold px-8 py-4 rounded-xl border border-neutral-200 hover:border-sky-200 transition-all hover:-translate-y-0.5 text-base shadow-sm"
              >
                {t('cta2')}
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5">
              {(['trust1', 'trust2', 'trust3'] as const).map((key) => (
                <div key={key} className="flex items-center gap-2 text-neutral-600">
                  <svg className="w-4 h-4 text-sky-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <SupplementIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-neutral-400 text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
